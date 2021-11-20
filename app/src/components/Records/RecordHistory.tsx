import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Record } from ".";
import { data } from "../../utils/data/records.data";

export const RecordsHistory: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        style={{ marginTop: 15 }}
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
    marginTop: 15,
    marginLeft: 12,
  },
});
