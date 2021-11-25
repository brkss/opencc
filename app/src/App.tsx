import "reflect-metadata";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MainNavigation } from "./navigation";
import { DatabaseConnectionProvider } from "./utils/database";

export default function App() {
  return (
    <DatabaseConnectionProvider>
      <StatusBar style="auto" />
      <MainNavigation />
    </DatabaseConnectionProvider>
  );
}
