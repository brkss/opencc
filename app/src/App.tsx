import "reflect-metadata";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MainNavigation } from "./navigation";
import { DatabaseConnectionProvider } from "./utils/database";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App() {
  const client: any = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client as any}>
      <DatabaseConnectionProvider>
        <StatusBar style="auto" />
        <MainNavigation />
      </DatabaseConnectionProvider>
    </ApolloProvider>
  );
}
