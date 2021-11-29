import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface Props {
  time: Date;
}

export const BgInsulinTimer: React.FC<Props> = ({ time }) => {
  const [width, SetWidth] = React.useState(0);
  const [rest, SetRest] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => calcRestTime(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const calcRestTime = () => {
    const diff = Math.abs(time.getHours() - new Date().getHours());
    const data = {
      width: diff == 0 ? 100 : (100 - diff * 100) / 24,
      rest:
        diff == 0
          ? `${Math.abs(time.getMinutes() - new Date().getMinutes())} Minutes`
          : `${diff} Hours`,
    };
    SetWidth(data.width);
    SetRest(data.rest);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Background Insulin in {rest}</Text>
      <View style={styles.bar}>
        <View style={[styles.timeLeft, { width: `${width}%` }]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    height: 30,
    width: "95%",
    backgroundColor: "#3f49da",
    borderRadius: 10,
  },
  timeLeft: {
    height: 30,
    width: "77%",
    backgroundColor: "#5761f2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 12,
    color: "#ffeae7",
    fontWeight: "bold",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 10,
  },
});
