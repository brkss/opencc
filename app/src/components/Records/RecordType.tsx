import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RecordTypeElement } from ".";
import { data } from "../../utils/data/recordtypes.data";

export const RecordType: React.FC = () => {
  const [selectedType, SetSelectedType] = React.useState<number>(-1);

  const handleSelectingType = (key: number) => {
    SetSelectedType(key);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Record</Text>
      <ScrollView
        horizontal={true}
        style={{ marginTop: 5 }}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((record, key) => (
          <RecordTypeElement
            onSelect={() => handleSelectingType(key)}
            selected={key == selectedType}
            {...record}
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
});
