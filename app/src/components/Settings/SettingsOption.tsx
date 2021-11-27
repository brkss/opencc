import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const SettingsElement: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}> 🥬 </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Meal Time</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  // icon
  iconContainer: {},
  icon: {},
  titleContainer: {},
  title: {},
});
