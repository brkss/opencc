import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Button,
  Timer,
  GlucoseRange,
  BgInsulinTimer,
  RecordsHistory,
} from "../components";

export const Home: React.FC<any> = ({ navigation }) => {
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
        <Button
          name={"ADD RECORD"}
          onClick={() => navigation.navigate("add-record")}
        />
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
    flex: 3,
    justifyContent: "center",
  },
  info: {
    flex: 3,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
