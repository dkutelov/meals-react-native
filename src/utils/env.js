import { Platform } from "react-native";

const firebaseUrl = "https://us-central1-mealstogo-5262a.cloudfunctions.net";
//Andriod can not work on local http. We can test only on firebase
const localUrl = "http://localhost:5001/mealstogo-5262a/us-central1";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isAndroid = Platform.OS === "android";
export const host = isDevelopment || isAndroid ? localUrl : firebaseUrl;
export const isMock = false;
