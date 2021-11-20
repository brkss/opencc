import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Button,
  Timer,
  GlucoseRange,
  BgInsulinTimer,
  RecordsHistory,
} from "../components";

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Timer />
      </View>
      <View style={styles.info}>
        <BgInsulinTimer />
        <GlucoseRange />
        <RecordsHistory />
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
    backgroundColor: "#ffeae7",
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
