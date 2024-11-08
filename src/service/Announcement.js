/** @format */

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
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
export const getAnnouncements = async () => {
  try {
    const announcementsRef = collection(db, "announcement");
    const announcementsSnapshot = await getDocs(announcementsRef);

    const announcements = announcementsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(announcements);
    return announcements;
  } catch (error) {
    console.log(error);
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
