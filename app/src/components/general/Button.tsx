import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface Props {
  name: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ onClick, name }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onClick()}>
      <Text style={styles.txt}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 7,
  },
  txt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 21,
    color: "white",
  },
});
