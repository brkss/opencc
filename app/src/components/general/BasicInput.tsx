import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("screen");

interface Props {
  placeholder: string;
}

export const BasicInput: React.FC<Props> = ({ placeholder }) => {
  const [text, onChangeText] = React.useState<string>();
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    width: width * 0.9,
    padding: 15,
    backgroundColor: "#edf0ee",
    borderRadius: 10,
  },
});
