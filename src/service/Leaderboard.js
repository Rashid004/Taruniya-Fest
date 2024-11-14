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
export const getLeaderBoards = async (setleaderBoardCallback) => {
  try {
    const leaderBoardsRef = collection(db, "leaderBoards");
    onSnapshot(leaderBoardsRef, (snapshot) => {
      const leaderBoards = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setleaderBoardCallback(leaderBoards);
    });
  } catch (error) {
    console.log(error);
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
