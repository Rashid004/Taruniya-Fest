/** @format */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Get  all users
export const getUsers = async () => {
  try {
    const usersRef = collection(db, "users");
    const usersSnapshot = await getDocs(usersRef);

    const users = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return users;
  } catch (error) {
    console.log(error);
  }
};

// Create a new user
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

// Update a user
export const updateUser = async (id, body) => {
  try {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, body);
    console.log("User Updated");
  } catch (error) {
    console.log(error);
  }
};

// Delete a user
export const deleteUser = async (id) => {
  try {
    const userRef = doc(db, "users", id);
    await deleteDoc(userRef);
    console.log("User Deleted");
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id) => {
  try {
    const userRef = doc(db, "users", id);
    const userSnapshot = await getDoc(userRef);
    return userSnapshot.data();
  } catch (error) {
    console.log(error);
  }
};
