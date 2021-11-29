import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Timer: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.time}>02:32</Text>
        <Text style={styles.info}>Fast-Acting insulin</Text>
        <Text style={styles.purpose}>Dinner</Text>
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
