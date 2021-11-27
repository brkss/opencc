import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SettingsElement, BgInsulinTime } from "../../components";

export const Settings: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.contentContainer}>
        <SettingsElement
          onClick={() => navigation.navigate("meal-time")}
          icon={"🥗"}
          title={"Meal Time"}
        />
        <BgInsulinTime />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    paddingBottom: 15,
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
