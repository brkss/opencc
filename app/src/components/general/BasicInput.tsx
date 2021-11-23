import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

const { width } = Dimensions.get("screen");

interface Props {
  placeholder: string;
  nums?: boolean;
  onChange: (val: string) => void;
}

export const BasicInput: React.FC<Props> = ({
  placeholder,
  nums,
  onChange,
}) => {
  const [text, onChangeText] = React.useState<string>();
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        keyboardType={nums ? "numeric" : "default"}
        placeholder={placeholder}
        style={styles.input}
        onChangeText={(txt) => {
          onChangeText(txt);
          onChange(txt);
        }}
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
