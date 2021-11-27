import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  onClick: () => void;
  icon: string;
  title: string;
}

export const SettingsElement: React.FC<Props> = ({ onClick, icon, title }) => {
  return (
    <TouchableOpacity onPress={() => onClick()} style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}> {icon}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.navContainer}>
        <MaterialIcons
          style={{ alignSelf: "flex-end" }}
          name="keyboard-arrow-right"
          size={27}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    paddingVertical: 17,
    backgroundColor: "#e3e4e6",
    margin: 12,
    borderRadius: 7,
  },
  // icon
  iconContainer: {},
  icon: {
    fontSize: 23,
  },
  titleContainer: {
    paddingLeft: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  navContainer: {
    borderColor: "black",
  },
});
