import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDatabaseConnection } from "../../utils/database";
import moment from "moment";

interface Props {
  title: string;
  time: number;
}

export const Timer: React.FC<Props> = ({ time, title }) => {
  const { timeRepository } = useDatabaseConnection();
  const [mealName, setMealName] = React.useState(title);
  const [timerCount, setTimer] = React.useState(time);
  const [timeRest, SetTimeRest] = React.useState("");

  React.useEffect(() => {
    let interval = setInterval(() => {
      console.log("TIMER COUNT : ", time);
      //console.log("TIME NOW: ", new Date().getTime());
      time <= 1 && clearInterval(interval);
      formatTime(time - new Date().getTime());
      //return timerCount - new Date().getTime();
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete

    return () => clearInterval(interval);
  }, []);

  /*
  const getNextMeal = () => {
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

      console.log("EXPIRE TIEM : ", new Date(exp.time).getTime());
      setTimer(new Date(exp.time).getTime());
      setMealName(exp.meal);
    });
  };
   */
  const stringfyTime = (time: number) => {
    if (time == 0) return "00";
    if (time < 10) return `0${time}`;
    return time;
  };

  const formatTime = (time: number) => {
    const days = Math.floor(time / 1000 / 60 / 60 / 24);
    time -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(time / 1000 / 60 / 60);
    time -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(time / 1000 / 60);
    time -= minutes * 1000 * 60;
    const seconds = Math.floor(time / 1000);

    SetTimeRest(
      `${stringfyTime(hours)}:${stringfyTime(minutes)}:${stringfyTime(seconds)}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text> </Text>
        <Text style={styles.time}> {timeRest}</Text>
        <Text style={styles.info}>Fast-Acting insulin</Text>
        <Text style={styles.purpose}>{title}</Text>
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
