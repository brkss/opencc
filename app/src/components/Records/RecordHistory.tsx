import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Record } from "./Record";
import { Record as IRecord } from "../../utils/database/entities";

interface Props {
  records: IRecord[];
  deleteRec: (id: string) => void;
}

export const RecordsHistory: React.FC<Props> = ({ records, deleteRec }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Last Records</Text>
      {records.length == 0 ? (
        <View style={styles.noDataAlert}>
          <Text>No Record Found !</Text>
        </View>
      ) : null}
      <ScrollView
        horizontal={true}
        style={{ marginTop: 5 }}
        showsHorizontalScrollIndicator={false}
      >
        {records.map((record, key) => (
          <Record
            icon={record.icon}
            onDelete={() => deleteRec(record.id!)}
            label={record.label}
            unit={record.unit}
            value={record.value}
            key={key}
          />
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
  noDataAlert: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: "100%",
    backgroundColor: "#ededed",
    borderRadius: 7,
  },
});
