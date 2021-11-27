import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SettingsElement } from "../../components";

export const Settings: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.contentContainer}>
        <SettingsElement />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    paddingBottom: 15,
    paddingLeft: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 3,
    //backgroundColor: "yellow",
  },
});
