import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";

export const firebaseApp = initializeApp(firebaseConfig);

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const userStatusRequest = (cb) => onAuthStateChanged(auth, cb);

export const logoutRequest = (cb) => signOut(auth);
