import React from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import { RecordType, Button, BasicInput } from "../../components";
import { IRecord } from "../../utils/types/Record.interface";

export const AddRecord: React.FC = () => {
  const [recType, SetRecType] = React.useState<IRecord>();

  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const handleTypeChange = (rec: IRecord) => {
    SetRecType(rec);
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.wraper, { height: isKeyboardVisible ? "80%" : "60%" }]}
      >
        <View style={styles.recordContainer}>
          <RecordType doneSelecting={(rec) => handleTypeChange(rec)} />
        </View>
        <View
          style={[
            styles.inputContainer,
            {
              justifyContent: isKeyboardVisible ? "flex-start" : "center",
              marginTop: isKeyboardVisible ? 20 : 0,
            },
          ]}
        >
          {recType ? (
            <>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                  marginLeft: 20,
                  fontSize: 22,
                }}
              >
                {recType.icon} {recType.value}
              </Text>
              <BasicInput nums={true} placeholder={recType.placeholder!} />
            </>
          ) : (
            <Text>?</Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button name={"Add"} onClick={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  wraper: {
    height: "70%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  recordContainer: {
    flex: 0,
  },
  inputContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
