import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";

export const firebaseApp = initializeApp(firebaseConfig);

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
