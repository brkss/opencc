import React from "react";
import { View, StyleSheet, Text } from "react-native";

const data = {
  time: 21,
};

export const BgInsulinTimer: React.FC = () => {
  const calcRestTime = () => {
    return 100 - (Math.abs(data.time - new Date().getHours()) * 100) / 24;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Background Insulin in {Math.abs(data.time - new Date().getHours())}{" "}
        Hours
      </Text>
      <View style={styles.bar}>
        <View style={[styles.timeLeft, { width: calcRestTime() }]}></View>
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
