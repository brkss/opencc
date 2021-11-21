import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, AddRecord } from "../screens";

export const AppNavigation: React.FC = () => {
  const { Navigator, Screen, Group } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name={"home"} component={Home} />
      </Group>
      <Group
        screenOptions={{
          presentation: "modal",
          cardStyle: { backgroundColor: "transparent", opacity: 0.99 },
        }}
      >
        <Screen name={"add-record"} component={AddRecord} />
      </Group>
    </Navigator>
  );
};
