import { openDatabase } from "expo-sqlite";

const db = openDatabase("db");

export const initDatabase = () => {
  db.transaction((tx) => {
    /*
    // drop table
    tx.executeSql("DROP TABLE records", [], (resp) => {
      console.log("drop table resp => ", resp);
    });
  */

    // create table
    tx.executeSql(
      "create table if not exists records (time DATE, value TEXT, label TEXT, syncd BOOLEAN)",
      []
    );

    /*
    // insert data
    tx.executeSql(
      "INSERT INTO records (time, value, label)VALUES(?, ?, ?)",
      [Date.now(), "200", "Glucose"],
      (_, { rows: { _array } }) => console.log(_array)
    );

    tx.executeSql("select * from records", [], (_, { rows: { _array } }) =>
      console.log(_array)
    );
    */
  });
};
