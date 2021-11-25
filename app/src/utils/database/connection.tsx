import React from "react";
import { Connection, createConnection } from "typeorm";
import { ActivityIndicator, Text } from "react-native";
import { Record } from "./entities";
import { CreateRecordsTable1637853700882 } from "./migrations";
import { RecordRepository } from "./repositories";

interface DatabaseConnectionContextData {
  recordsRepository: RecordRepository;
}

const DatabaseConnectionContext =
  React.createContext<DatabaseConnectionContextData>(
    {} as DatabaseConnectionContextData
  );

export const DatabaseConnectionProvider: React.FC = ({ children }) => {
  const [connection, SetConnection] = React.useState<Connection | null>(null);
  const connect = React.useCallback(async () => {
    const createdConnection = await createConnection({
      type: "expo",
      database: "db",
      driver: require("expo-sqlite"),
      entities: [Record],
      migrations: [CreateRecordsTable1637853700882],
      migrationsRun: false,
      synchronize: true,
    });
    //.catch((e) => console.log("error accured connecting to db -> ", e));
    console.log("tried to connect !");
    SetConnection(createdConnection);
  }, []);

  React.useEffect(() => {
    if (!connection) {
      connect();
    }
  }, [connection, connect]);

  if (!connection) return <Text>Hello</Text>;

  return (
    <DatabaseConnectionContext.Provider
      value={{
        recordsRepository: new RecordRepository(connection),
      }}
    >
      {children}
    </DatabaseConnectionContext.Provider>
  );
};

export const useDatabaseConnection = () => {
  const context = React.useContext(DatabaseConnectionContext);
  return context;
};
