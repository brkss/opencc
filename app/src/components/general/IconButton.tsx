import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  icon: string;
  color?: string;
  onClick: () => void;
}

export const IconButton: React.FC<Props> = ({ icon, color }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather name={icon as any} size={27} color={color ? color : "black"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});
