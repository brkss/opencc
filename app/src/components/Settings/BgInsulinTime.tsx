import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const BgInsulinTime: React.FC = () => {
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState<any>("time");
  const [show, setShow] = React.useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Background Insulin </Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        //is24Hour={true}
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
