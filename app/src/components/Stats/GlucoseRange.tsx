import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

const { width } = Dimensions.get("window");

export const GlucoseRange: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>70% in Range</Text>
      <View style={styles.bar}>
        <View style={styles.upRange}>
          <Text style={styles.num}>20%</Text>
        </View>
        <View style={styles.inRange}>
          <Text style={styles.num}>70%</Text>
        </View>
        <View style={styles.downRange}>
          <Text style={styles.num}>10%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 5,
    marginLeft: 10,
  },
  bar: {
    width: "95%",
    height: 30,
    flexDirection: "row",
    borderRadius: 10,
  },
  upRange: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: "20%",
    backgroundColor: "#e7c654",
    justifyContent: "center",
    alignItems: "center",
  },
  inRange: {
    width: "70%",
    backgroundColor: "#8bc388",
    justifyContent: "center",
    alignItems: "center",
  },
  downRange: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: "10%",
    backgroundColor: "#e18f9d",
    justifyContent: "center",
    alignItems: "center",
  },
  num: {
    fontSize: 10,
    fontWeight: "bold",
  },
});
