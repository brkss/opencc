import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Timer,
  GlucoseRange,
  BgInsulinTimer,
  RecordsHistory,
} from "../components";
import { useIsFocused } from "@react-navigation/native";
import { useDatabaseConnection } from "../utils/database";

export const Home: React.FC<any> = ({ navigation }) => {
  const isFocus = useIsFocused();
  const [records, SetRecords] = React.useState<any[]>([]);
  const { recordsRepository } = useDatabaseConnection();

  React.useEffect(() => {
    getRecords();
  }, [isFocus]);

  const getRecords = () => {
    recordsRepository.getAll().then((recs) => {
      SetRecords(recs.reverse());
      console.log("recs => ", recs);
    });
  };

  const deleteRecord = async (id: string) => {
    const res = await recordsRepository.deleteRecord(id);
    if (res) {
      SetRecords((curr) => curr.filter((rec) => rec.id != id));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Timer />
      </View>
      <View style={styles.info}>
        <BgInsulinTimer />
        <GlucoseRange />
        <RecordsHistory
          records={records}
          deleteRec={(id) => deleteRecord(id)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          name={"ADD RECORD"}
          onClick={() => navigation.navigate("add-record")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  timer: {
    flex: 3,
    justifyContent: "center",
  },
  info: {
    flex: 3,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
