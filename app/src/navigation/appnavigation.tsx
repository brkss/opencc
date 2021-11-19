import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";

export const AppNavigation: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={"home"} component={Home} />
    </Navigator>
  );
};
