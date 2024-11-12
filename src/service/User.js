/** @format */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Get  all users
export const getUsers = (setUsersCallback) => {
  try {
    const usersRef = collection(db, "users");

    // Set up a real-time listener for the 'users' collection
    const unsubscribe = onSnapshot(usersRef, (snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Update the users using the provided callback function
      setUsersCallback(users);

      // Log changes for added, modified, or removed documents
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New user added:", change.doc.data());
        } else if (change.type === "modified") {
          console.log("User updated:", change.doc.data());
        } else if (change.type === "removed") {
          console.log("User removed:", change.doc.data());
        }
      });
    });

    // Return the unsubscribe function to allow cleanup
    return unsubscribe;
  } catch (error) {
    console.error("Error setting up users listener:", error);
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
