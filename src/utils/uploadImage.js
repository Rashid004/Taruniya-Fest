/** @format */
import { storage } from "../config/firebase"; // Ensure this is correct
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export const uploadImage = async (file, imagePath) => {
  const imageRef = ref(storage, imagePath);
  try {
    const snapshot = await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL; // Return the URL
  } catch (error) {
    console.error("Error uploading image to Firebase Storage:", error);
    throw error; // Ensure you throw the error for further handling
  }
};

// Delete image from Firebase Storage
export const deleteImage = async (imagePath) => {
  const imageRef = ref(storage, imagePath);
  try {
    await deleteObject(imageRef);
  } catch (error) {
    console.error("Error deleting image from Firebase Storage:", error);
  }
};
