import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MealTime: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is meal time !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
