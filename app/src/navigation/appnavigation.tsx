import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, AddRecord, Settings, MealTime } from "../screens";

export const AppNavigation: React.FC = () => {
  const { Navigator, Screen, Group } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"home"} component={Home} />
        <Screen name={"settings"} component={Settings} />
      </Group>
      <Group
        screenOptions={{
          presentation: "modal",
          cardStyle: { backgroundColor: "transparent", opacity: 0.99 },
        }}
      >
        <Screen name={"add-record"} component={AddRecord} />
      </Group>
      <Group screenOptions={{ presentation: "modal" }}>
        <Screen name={"meal-time"} component={MealTime} />
      </Group>
    </Navigator>
  );
};
