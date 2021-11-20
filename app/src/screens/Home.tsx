import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Timer, GlucoseRange } from "../components";

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Timer />
      </View>
      <View style={styles.info}>
        <GlucoseRange />
        <Text>Other component!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8e8",
  },
  timer: {
    flex: 4,
  },
  info: {
    flex: 3,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
