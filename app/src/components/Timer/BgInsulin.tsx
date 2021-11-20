import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const BgInsulinTimer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Background Insulin</Text>
      <View style={styles.bar}>
        <View style={styles.timeLeft}>
          <Text style={styles.time}>15 Hours</Text>
        </View>
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
    backgroundColor: "#596CCE",
    borderRadius: 10,
  },
  timeLeft: {
    height: 30,
    width: "77%",
    backgroundColor: "#A1A7FF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 12,
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
