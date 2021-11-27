import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export const TopNavigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <Feather name={"settings"} size={27} color={"black"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    zIndex: 9999,
    alignItems: "flex-end",
    width: "100%",
    paddingEnd: 20,
  },
});
