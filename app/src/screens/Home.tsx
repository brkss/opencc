import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text>Time Here !</Text>
      </View>
      <View style={styles.info}>
        <Text>Other component!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text>Add Button !</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timer: {
    flex: 3,
    backgroundColor: "#fff8e8",
  },
  info: {
    flex: 3,
    backgroundColor: "#faeccd",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#ffe9b8",
  },
});
