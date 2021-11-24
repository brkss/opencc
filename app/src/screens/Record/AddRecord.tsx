import React from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import { RecordType, Button, BasicInput } from "../../components";
import { IRecord } from "../../utils/types/Record.interface";
import { initDatabase } from "../../utils/database/init";
import { addRecord, recordList } from "../../utils/database/worker";

export const AddRecord: React.FC = () => {
  const [recType, SetRecType] = React.useState<IRecord>();
  const [value, SetValue] = React.useState("");
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

  const handleValueChange = (val: string) => {
    SetValue(val);
    console.log("val -> ", val);
  };

  const saveRecord = () => {
    const obj = {
      ...recType,
      val: value,
    };
    initDatabase();
    addRecord(obj.val, obj.placeholder!);

    console.log("record => ", recordList());
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
              <BasicInput
                onChange={(val) => handleValueChange(val)}
                nums={true}
                placeholder={recType.placeholder!}
              />
            </>
          ) : (
            <Text style={{ fontWeight: "bold" }}>?</Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button name={"Record"} onClick={() => saveRecord()} />
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
