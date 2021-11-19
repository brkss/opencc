import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./appnavigation";

export const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
