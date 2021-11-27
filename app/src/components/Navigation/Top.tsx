import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { IconButton } from "..";

interface Props {
  navigation: any;
}

export const TopNavigation: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <IconButton
        icon={"settings"}
        onClick={() => navigation.navigate("settings")}
      />
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
