/** @format */
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
export const CreateUser = async (body) => {
  try {
    const userRef = doc(db, "users", body.id);
    await setDoc(userRef, body);
    console.log("User Created");
  } catch (error) {
    console.log(error);
    console.log("Error Creating User");
  }
};
