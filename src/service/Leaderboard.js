/** @format */

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Create LeaderBoards
export const createLeaderBoard = async (body) => {
  try {
    const leaderRef = doc(db, "leaderBoards", body.id);
    await setDoc(leaderRef, body);
    console.log("Leader Board Created Successfull");
  } catch (error) {
    console.log(error.message);
  }
};

// Get All
export const getLeaderBoards = (setLeaderBoardCallback) => {
  try {
    const LeaderBoardsRef = collection(db, "leaderBoards");

    // Set up a real-time listener for the 'events' collection
    return onSnapshot(LeaderBoardsRef, (snapshot) => {
      const leaderboardRef = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Update the events using the provided callback function
      setLeaderBoardCallback(leaderboardRef);

      // Log changes for added, modified, or removed documents
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New Leaderboards added:", change.doc.data());
        } else if (change.type === "modified") {
          console.log("Leaderboards updated:", change.doc.data());
        } else if (change.type === "removed") {
          console.log("Leaderboards removed:", change.doc.data());
        }
      });
    });
  } catch (error) {
    console.error("Error setting up events listener:", error);
  }
};

// update LeaderBoard
export const updateLeaderBoard = async (id, body) => {
  try {
    const leaderBoardsRef = doc(db, "leaderBoards", id);
    await updateDoc(leaderBoardsRef, body);
  } catch (error) {
    console.log(error);
  }
};

// Delete LeaderBoard
export const deleteLeaderBoard = async (id) => {
  try {
    const leaderBoardsRef = doc(db, "leaderBoards", id);
    await deleteDoc(leaderBoardsRef);
  } catch (error) {
    console.log(error);
  }
};

// Get a single LeaderBoard
export const getLederBoardById = async (id) => {
  try {
    const leaderBoardRef = doc(db, "leaderBoards", id);
    const leaderBoardSnapshot = await getDoc(leaderBoardRef);
    return leaderBoardSnapshot.data();
  } catch (error) {
    console.log(error);
  }
};

// Delete LeaderBoard(s)
export const deleteCheckLeaderBoard = async (ids) => {
  try {
    if (Array.isArray(ids)) {
      const deletePromise = ids.map((id) => {
        const leaderBoardRef = doc(db, "leaderBoards", id);
        return deleteDoc(leaderBoardRef);
      });
      await Promise.all(deletePromise);
      console.log("Selected LeaderBoards deleted successfully");
    } else {
      const leaderBoardRef = doc(db, "leaderBoards", ids);
      await deleteDoc(leaderBoardRef);
      console.log("LeaderBoard deleted successfully");
    }
  } catch (error) {
    console.log("Error deleting LeaderBoards:", error);
  }
};
