import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { IRecord } from "../../utils/types/Record.interface";

interface Props {
  onDelete: () => void;
  label?: string;
  value: string;
  icon: string;
  unit: string;
}

export const Record: React.FC<Props> = ({
  icon,
  value,
  label,
  onDelete,
  unit,
}) => {
  return (
    <TouchableOpacity style={styles.container} onLongPress={() => onDelete()}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>
        {value} {unit}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9e8f7",
    //backgroundColor: "#5761f2",
    padding: 15,
    borderRadius: 100,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
    marginLeft: 5,
    borderColor: "#e6e4ff",
    borderWidth: 0,
  },
  icon: {
    fontSize: 30,
  },
  value: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
