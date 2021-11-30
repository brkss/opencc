import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Meal } from "../../components";
import { meals } from "../../utils/data/meals.data";

export const MealTime: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Meal Time</Text>
      {meals.map((meal, key) => (
        <Meal key={key} mealTitle={meal.name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
