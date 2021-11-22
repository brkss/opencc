import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RecordType, Button, BasicInput } from "../../components";

export const AddRecord: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <View style={styles.recordContainer}>
          <RecordType />
        </View>
        <View style={styles.inputContainer}>
          <BasicInput placeholder={"Glucose"} />
          <BasicInput placeholder={"Units"} />
        </View>
        <View style={styles.buttonContainer}>
          <Button name={"Add"} onClick={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  wraper: {
    height: "50%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  recordContainer: {
    flex: 0,
  },
  inputContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
