import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SettingsElement, BgInsulinTime } from "../../components";
import { useDatabaseConnection } from "../../utils/database";
import { useSaveRecordMutation } from "../../generated/graphql";
import { useIsFocused } from "@react-navigation/native";

export const Settings: React.FC<any> = ({ navigation }) => {
  const [unsavedRecords, SetUnsavedRecord] = React.useState([]);
  const { recordsRepository } = useDatabaseConnection();
  const [create] = useSaveRecordMutation();
  const isFocus = useIsFocused();

  React.useEffect(() => {
    unsavedRecs();
  }, [isFocus]);

  const unsavedRecs = () => {
    recordsRepository.unsavedRecords().then((records) => {
      SetUnsavedRecord(records as any);
    });
  };

  const getUnsavedRecords = () => {
    recordsRepository.unsavedRecords().then((records) => {
      // map records
      const recs = records.map((record) => ({
        id: record.id,
        label: record.label,
        icon: record.icon,
        unit: record.unit,
        value: Number(record.value),
        created_at: record.created_at,
      }));
      if (recs.length > 0) {
        create({
          variables: {
            records: recs,
          },
        }).then((res) => {
          // please handle error here! with toasts
          // before forcing data defenition !
          if (res.data && res.data.saveRecords) {
            // map ids to update sqlite
            const ids = recs.map((record) => record.id);
            //console.log("ids => ", ids);
            recordsRepository.markRecords(ids).then((res) => {
              console.log("res marking records as syncd => ", res);
            });
          }
          console.log("res after saving records => ", res.data!.saveRecords);
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.contentContainer}>
        <SettingsElement
          onClick={() => getUnsavedRecords()}
          icon={"💿"}
          title={`Save `}
          subtitle={`${unsavedRecords.length} records`}
          hideNav={true}
        />
        <SettingsElement
          onClick={() => navigation.navigate("meal-time")}
          icon={"🥗"}
          title={"Meal Time"}
        />
        <BgInsulinTime />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: "flex-end",
    paddingBottom: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 3,
    //backgroundColor: "yellow",
  },
});
