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

// Create a Announcement
export const createAnnouncement = async (body) => {
  try {
    const announcementRef = doc(db, "announcement", body.id);
    await setDoc(announcementRef, body);
  } catch (error) {
    console.log(error);
  }
};

// Get all Announcements
export const getAnnouncements = (setAnnouncementCallback) => {
  try {
    const announcementsRef = collection(db, "announcement");

    return onSnapshot(announcementsRef, (snapshot) => {
      const announcements = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAnnouncementCallback(announcements);

      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New announcement added:", change.doc.data());
        } else if (change.type === "modified") {
          console.log("Announcement updated:", change.doc.data());
        } else if (change.type === "removed") {
          console.log("Announcement removed:", change.doc.data());
        }
      });
    });
  } catch (error) {
    console.error("Error setting up announcements listener:", error);
  }
};
// Delete Announcemente
export const deleteAnnouncement = async (id) => {
  try {
    const announcementRef = doc(db, "announcement", id);
    await deleteDoc(announcementRef);
  } catch (error) {
    console.log(error);
  }
};

// Update Announcement
export const updateAnnouncement = async (id, body) => {
  try {
    const announcementRef = doc(db, "announcement", id);
    await updateDoc(announcementRef, body);
  } catch (error) {
    console.log(error);
  }
};

// Get a single Announcement
export const getAnnouncementsById = async (id) => {
  try {
    const announcementRef = doc(db, "announcement", id);
    const announcementSnapshot = await getDoc(announcementRef);
    return announcementSnapshot.data();
  } catch (error) {
    console.log(error);
  }
};

// Delete Announcement(s)
export const deleteCheckAnnouncement = async (ids) => {
  try {
    if (Array.isArray(ids)) {
      // Deleting multiple announcements
      const deletePromises = ids.map((id) => {
        const announcementRef = doc(db, "announcement", id);
        return deleteDoc(announcementRef);
      });
      await Promise.all(deletePromises); // Wait for all deletions
      console.log("Selected announcements deleted successfully");
    } else {
      // Deleting a single announcement
      const announcementRef = doc(db, "announcement", ids);
      await deleteDoc(announcementRef);
      console.log("Announcement deleted successfully");
    }
  } catch (error) {
    console.log("Error deleting announcements:", error);
  }
};
