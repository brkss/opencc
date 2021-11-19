import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Button: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txt}>ADD RECORD</Text>
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
