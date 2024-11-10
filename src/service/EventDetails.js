/** @format */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Create Event Detail
export const createEventDetail = async (id, data) => {
  try {
    const eventDetailRef = doc(db, "eventsDetail", id);
    await setDoc(eventDetailRef, data);
    console.log("Event Detail created successfully");
  } catch (error) {
    console.log(error);
  }
};

// Get all Event Details
export const getEventDetails = async () => {
  try {
    const eventDetailRef = collection(db, "eventsDetail");
    const eventDetailSnapshot = await getDocs(eventDetailRef);

    return eventDetailSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.log(error);
  }
};

// Update Event Detail
export const updateEventDetail = async (id, data) => {
  try {
    const eventDetailRef = doc(db, "eventsDetail", id);
    await updateDoc(eventDetailRef, data);
  } catch (error) {
    console.log(error);
  }
};

// Delete Event Detail
export const deleteEventDetail = async (id) => {
  try {
    const eventDetailRef = doc(db, "eventsDetail", id);
    await deleteDoc(eventDetailRef);
  } catch (error) {
    console.log(error);
  }
};

// Get a single Event Detail by ID
export const getEventDetailById = async (id) => {
  try {
    const eventDetailRef = doc(db, "eventsDetail", id);
    const eventDetailSnapshot = await getDoc(eventDetailRef);
    return eventDetailSnapshot.data();
  } catch (error) {
    console.log(error);
  }
};
