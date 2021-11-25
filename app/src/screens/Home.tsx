import { openDatabase } from "expo-sqlite";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Button,
  Timer,
  GlucoseRange,
  BgInsulinTimer,
  RecordsHistory,
} from "../components";
import { useIsFocused } from "@react-navigation/native";

const db = openDatabase("db");

export const Home: React.FC<any> = ({ navigation }) => {
  const isFocus = useIsFocused();
  const [records, SetRecords] = React.useState([]);

  React.useEffect(() => {
    getRecords();
  }, [isFocus]);

  const getRecords = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM records", [], (_, { rows }) => {
        SetRecords(rows._array as any);
        console.log(rows._array);
      });
    });
  };

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
    backgroundColor: "#ffffff",
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
