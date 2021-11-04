import {Platform} from 'react-native';
import * as SQLite from 'expo-sqlite';

export function openDatabase() {
    if (Platform.OS === "web") {
      return {
        transaction: () => {
          return {
            executeSql: () => {},
          };
        },
      };
    }
    const db = SQLite.openDatabase("appMuestras.db");
    console.log('create database succes!');
    return db;
}