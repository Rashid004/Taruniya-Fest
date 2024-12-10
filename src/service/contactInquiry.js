/** @format */

import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const CreateContactInquiry = async (body) => {
  try {
    // Correct reference to the collection
    const contactInquiryRef = collection(db, "contact-inquiry");

    // Add a new document with auto-generated ID
    await addDoc(contactInquiryRef, body);

    console.log("Contact inquiry added successfully:", body);
  } catch (error) {
    console.error("Error adding contact inquiry:", error);
    throw error; // Re-throw for external error handling
  }
};

// get all contact inquiries
export const getContactInquiries = (setContactInquiryCallback) => {
  try {
    const contactInquiriesRef = collection(db, "contact-inquiry");
    return onSnapshot(contactInquiriesRef, (snapshot) => {
      const contactInquiries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setContactInquiryCallback(contactInquiries);

      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New contact inquiry added:", change.doc.data());
        } else if (change.type === "modified") {
          console.log("Contact inquiry updated:", change.doc.data());
        } else if (change.type === "removed") {
          console.log("Contact inquiry removed:", change.doc.data());
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};
