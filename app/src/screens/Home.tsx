import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Timer,
  GlucoseRange,
  BgInsulinTimer,
  RecordsHistory,
  TopNavigation,
} from "../components";
import { useIsFocused } from "@react-navigation/native";
import { useDatabaseConnection } from "../utils/database";
import moment from "moment";

export const Home: React.FC<any> = ({ navigation }) => {
  const isFocus = useIsFocused();
  const [records, SetRecords] = React.useState<any[]>([]);
  const [bgTime, SetBgTime] = React.useState(new Date());
  const { timeRepository, recordsRepository } = useDatabaseConnection();
  const [nextMeal, setNextMeal] = React.useState({
    time: new Date().getTime(),
    mealTitle: "",
  });

  React.useEffect(() => {
    getNextMeal();
    getRecords();
  }, [isFocus]);

  const getNextMeal = async () => {
    timeRepository.meals().then((meals) => {
      // calculate minutes in day !
      const dm = (m: any) => {
        return m.minutes() + m.hours() * 60;
      };
      let exp = {
        dm: null as any,
        time: null as any,
        meal: null as any,
      };
      for (let meal of meals) {
        const time = moment(meal.time);
        if (dm(time) > dm(moment())) {
          if (!exp.dm || exp.dm > dm(time))
            exp = {
              dm: dm(time),
              time: meal.time,
              meal: meal.name,
            };
        }
      }
      exp = {
        dm: exp.dm,
        time: `${new Date().toISOString().split("T")[0]}T${
          exp.time.toISOString().split("T")[1]
        }`,
        meal: exp.meal,
      };

      console.log(
        "EXPIRE TIME : ",
        new Date(exp.time).setHours(new Date(exp.time).getHours() + 1)
      );
      setNextMeal({
        time: new Date(exp.time).setHours(new Date(exp.time).getHours() + 1),
        mealTitle: exp.meal,
      });
      //setTimer(new Date(exp.time).getTime());
      //setMealName(exp.meal);
    });
  };

  const getRecords = () => {
    recordsRepository.getAll().then((recs) => {
      SetRecords(recs.reverse());
      console.log("recs => ", recs);
    });
    timeRepository.time("BG_INSULIN").then((res) => {
      SetBgTime(new Date(res[0].time));
    });
  };

  const deleteRecord = async (id: string) => {
    const res = await recordsRepository.deleteRecord(id);
    if (res) {
      SetRecords((curr) => curr.filter((rec) => rec.id != id));
    }
  };

  return (
    <View style={styles.container}>
      <TopNavigation navigation={navigation} />
      <View style={styles.timer}>
        <Timer title={nextMeal.mealTitle} time={nextMeal.time} />
      </View>
      <View style={styles.info}>
        <BgInsulinTimer time={bgTime} />
        <GlucoseRange />
        <RecordsHistory
          records={records}
          deleteRec={(id) => deleteRecord(id)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          name={"ADD RECORD"}
          onClick={() => navigation.navigate("add-record")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  timer: {
    flex: 3,
    justifyContent: "center",
  },
  info: {
    flex: 3,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
