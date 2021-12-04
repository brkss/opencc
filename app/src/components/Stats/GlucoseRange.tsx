import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { useDatabaseConnection } from "../../utils/database";
import { useIsFocused } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export const GlucoseRange: React.FC = () => {
  const { recordsRepository } = useDatabaseConnection();
  const [data, SetData] = React.useState<any>({});
  const isFocus = useIsFocused();

  React.useEffect(() => {
    getGlucoseData();
  }, [isFocus]);

  const calculateRanges = (highs: number, low: number, normal: number) => {
    const data = {
      low: "",
      high: "",
      normal: "",
    };
    const totalLen = highs + low + normal;
    data.high = `${Math.floor((highs * 100) / totalLen)}%`;
    data.normal = `${Math.floor((normal * 100) / totalLen)}%`;
    data.low = `${Math.floor((low * 100) / totalLen)}%`;
    return data;
  };

  const getGlucoseData = () => {
    recordsRepository.glucoseRecords().then((records) => {
      console.log("Glucose records ! = ", records);
      // filter data !
      const highs = records.filter((rec) => {
        if (Number(rec.value) > 180) return rec.value;
      });
      const lows = records.filter((rec) => {
        if (Number(rec.value) < 80) return Number(rec.value);
      });
      const normal = records.filter((rec) => {
        if (Number(rec.value) > 80 && Number(rec.value) < 180)
          return Number(rec.value);
      });

      const data = calculateRanges(highs.length, lows.length, normal.length);
      SetData(data);
    });
  };

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
