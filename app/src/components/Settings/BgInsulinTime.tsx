import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const BgInsulinTimer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Background Insulin Time</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
