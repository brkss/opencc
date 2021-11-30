import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDatabaseConnection } from "../../utils/database";

interface Props {
  mealTitle: string;
}

export const Meal: React.FC<Props> = ({ mealTitle }) => {
  const [date, setDate] = React.useState(new Date(1598051730000));
  const [mode, setMode] = React.useState<any>("time");
  const [show, setShow] = React.useState(false);
  const { timeRepository } = useDatabaseConnection();

  const onChange = async (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    const dt = {
      type: `MEAL_${mealTitle.split(" ")[0]}`,
      name: mealTitle,
      time: currentDate,
    };
    const mealRecord = await timeRepository.add({
      time: dt.time,
      name: dt.name,
      type: dt.type,
    });
    if (mealRecord) console.log("Meal Created Successfuly");
    else console.log("Something went wrong");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {mealTitle} </Text>
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
