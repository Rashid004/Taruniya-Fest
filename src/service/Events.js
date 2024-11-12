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

export const createEvent = async (body) => {
  try {
    const eventRef = doc(db, "events", body.id);
    await setDoc(eventRef, body);
    console.log("Event created successfully");
  } catch (error) {
    console.log(error);
  }
};

export const getEvents = (setEventsCallback) => {
  try {
    const eventsRef = collection(db, "events");

    // Set up a real-time listener for the 'events' collection
    onSnapshot(eventsRef, (snapshot) => {
      const events = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Update the events using the provided callback function
      setEventsCallback(events);

      // Log changes for added, modified, or removed documents
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New event added:", change.doc.data());
        } else if (change.type === "modified") {
          console.log("Event updated:", change.doc.data());
        } else if (change.type === "removed") {
          console.log("Event removed:", change.doc.data());
        }
      });
    });
  } catch (error) {
    console.error("Error setting up events listener:", error);
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
