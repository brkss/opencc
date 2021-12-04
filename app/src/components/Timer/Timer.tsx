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
  //const [mealName, setMealName] = React.useState(title);
  //const [timerCount, setTimer] = React.useState(time);
  const [timeRest, SetTimeRest] = React.useState("");

  React.useEffect(() => {
    let interval = setInterval(() => {
      formatTime(time - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
