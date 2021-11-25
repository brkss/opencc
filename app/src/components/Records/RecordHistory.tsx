import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Record } from ".";
import { data } from "../../utils/data/records.data";
import { openDatabase } from "expo-sqlite";

const db = openDatabase("db");

export const RecordsHistory: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Last Records</Text>
      <ScrollView
        horizontal={true}
        style={{ marginTop: 5 }}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((record, key) => (
          <Record {...record} key={key} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 12,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
});
