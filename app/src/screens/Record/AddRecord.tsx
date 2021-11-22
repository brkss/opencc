import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RecordType } from "../../components";

export const AddRecord: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <RecordType />
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
});
