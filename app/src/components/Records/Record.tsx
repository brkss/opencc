import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IRecord } from "../../utils/types/Record.interface";

export const Record: React.FC<IRecord> = ({ icon, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9dad0",
    padding: 15,
    borderRadius: 100,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
    marginLeft: 5,
    borderColor: "#5761f2",
    borderWidth: 3,
  },
  icon: {
    fontSize: 30,
  },
  value: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
