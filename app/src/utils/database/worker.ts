import { openDatabase } from "expo-sqlite";

const db = openDatabase("db");
let data = [];

export const addRecord = (value: string, label: string) => {
  db.transaction((tx) => {
    //
    tx.executeSql(
      "INSERT INTO records (time, value, label, syncd)VALUES(?, ?, ?, 0)",
      [Date.now(), value, label],
      (res) => {
        console.log("resp => ", res);
      }
    );
  });
};

//export default data;
