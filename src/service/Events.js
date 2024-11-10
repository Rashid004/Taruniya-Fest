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

export const createEvent = async (body) => {
  try {
    const eventRef = doc(db, "events", body.id);
    await setDoc(eventRef, body);
    console.log("Event created successfully");
  } catch (error) {
    console.log(error);
  }
};

// Get all Events
export const getEvents = async () => {
  try {
    const eventsRef = collection(db, "events");
    const eventSnapshot = await getDocs(eventsRef);

    const events = eventSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(events);
    return events;
  } catch (error) {
    console.log(error);
  }
};

// Update Event
export const updateEvents = async (id, body) => {
  try {
    const eventRef = doc(db, "events", id);
    await updateDoc(eventRef, body);
  } catch (error) {
    console.log(error);
  }
};

// Delete Event
export const deleteEvent = async (id) => {
  try {
    const eventRef = doc(db, "events", id);
    await deleteDoc(eventRef);
  } catch (error) {
    console.log(error);
  }
};

// Get a single Event
export const getEventsById = async (id) => {
  try {
    const eventRef = doc(db, "events", id);
    const eventSnapshot = await getDoc(eventRef);
    return eventSnapshot.data();
  } catch (error) {
    console.log(error);
  }
};

// Delete Event(s)
export const deleteCheckEvent = async (ids) => {
  try {
    if (Array.isArray(ids)) {
      // Deleting multiple events
      const deletePromises = ids.map((id) => {
        const eventRef = doc(db, "events", id);
        return deleteDoc(eventRef);
      });
      await Promise.all(deletePromises); // Wait for all deletions
      console.log("Selected events deleted successfully");
    } else {
      // Deleting a single event
      const eventRef = doc(db, "events", ids);
      await deleteDoc(eventRef);
      console.log("Event deleted successfully");
    }
  } catch (error) {
    console.log("Error deleting events:", error);
  }
};
