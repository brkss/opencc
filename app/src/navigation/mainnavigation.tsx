import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./appnavigation";
import Toast from "react-native-toast-message";

export const MainNavigation: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toast />
    </>
  );
};
