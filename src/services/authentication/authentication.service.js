import { firebaseApp } from "../../../App";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
