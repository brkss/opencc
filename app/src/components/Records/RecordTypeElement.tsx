import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  icon: string;
  value: string;
  selected?: boolean;
  onSelect: () => void;
}

export const RecordTypeElement: React.FC<Props> = ({
  value,
  icon,
  selected,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect()}
      style={[styles.container, { borderWidth: selected ? 3 : 0 }]}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dee1e3",
    padding: 15,
    borderRadius: 100,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
    marginLeft: 5,
    borderColor: "#5f5e5e",
    //borderWidth: 3,
  },
  icon: {
    fontSize: 30,
  },
  value: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
