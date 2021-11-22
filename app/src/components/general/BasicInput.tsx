import React from "react";
import { View, StyleSheet, SafeAreaView, TextInput } from "react-native";

export const BasicInput: React.FC = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {},
});
