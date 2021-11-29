import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDatabaseConnection } from "../../utils/database";

export const BgInsulinTime: React.FC = () => {
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState<any>("time");
  const { timeRepository } = useDatabaseConnection();

  React.useEffect(() => {
    (async () => {
      const registredTime = await timeRepository.time("BG_INSULIN");
      console.log("registred time => ", new Date(registredTime[0].time));
      setDate(new Date(registredTime[0].time) || new Date().getTime());
    })();
  }, []);

  const onChange = async (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    const obj = {
      name: "Background Insulin",
      type: "BG_INSULIN",
      time: currentDate,
    };
    const res = await timeRepository.add({
      time: obj.time,
      type: obj.type,
      name: obj.name,
    });
    if (res) console.log("time record created successfuly");
    else console.log("something went wrong creating time record ! ");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Background Insulin </Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e3e4e6",
    padding: 15,
    borderRadius: 7,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 7,
    marginLeft: 3,
  },
});
