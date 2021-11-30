import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTimer } from "react-timer-hook";
import { useDatabaseConnection } from "../../utils/database";
import moment from "moment";

export const Timer: React.FC = () => {
  const { timeRepository } = useDatabaseConnection();
  const [expire, setExpire] = React.useState(new Date());
  const [mealName, setMealName] = React.useState("");

  React.useEffect(() => {
    (async () => {
      await getNextMeal();
    })();
  }, []);

  const getNextMeal = async () => {
    const meals = await timeRepository.meals();
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

    console.log("EXPIRE : ", exp);
    setExpire(exp.time);
    setMealName(exp.meal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.time}>02:32</Text>
        <Text style={styles.info}>Fast-Acting insulin</Text>
        <Text style={styles.purpose}>{mealName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    //backgroundColor: "#7eb99c",
  },
  circle: {
    height: 260,
    width: 260,
    backgroundColor: "#d5e9df",
    borderRadius: 1000,
    borderColor: "#5761f2",
    //borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 30,
    color: "#5761f2",
    fontWeight: "bold",
  },
  info: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  purpose: {
    fontSize: 18,
    marginTop: 10,
  },
});
