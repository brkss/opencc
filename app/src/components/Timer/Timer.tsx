import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Timer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.time}>02:32</Text>
        <Text style={styles.info}>Fast-Acting insulin</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 300,
    width: 300,
    backgroundColor: "#f9dad0",
    borderRadius: 1000,
    borderColor: "#5761f2",
    borderWidth: 10,
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
});
