import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

const data = {
  low: "10%",
  normal: "50%",
  high: "40%",
};

const { width } = Dimensions.get("window");

export const GlucoseRange: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{data.normal} in Range</Text>
      <View style={styles.bar}>
        <View style={[styles.upRange, { width: data.high }]}>
          <Text style={styles.num}>{data.high}</Text>
        </View>
        <View style={[styles.inRange, { width: data.normal }]}>
          <Text style={styles.num}>{data.normal}</Text>
        </View>
        <View style={[styles.downRange, { width: data.low }]}>
          <Text style={styles.num}>{data.low}</Text>
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
