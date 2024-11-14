/** @format */

import {
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  collection,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Create Blog
export const createBlog = async (body) => {
  try {
    const blogRef = doc(db, "blogs", body.id);
    await setDoc(blogRef, body);
    console.log("Blog created successfully");
  } catch (error) {
    console.log("Error creating blog:", error);
  }
};

// Get all Blogs
export const getBlogs = (setBlogCallback) => {
  try {
    const blogRef = collection(db, "blogs");
    return onSnapshot(blogRef, (snapshot) => {
      const blogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogCallback(blogs);

      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New blog added:", change.doc.data());
        } else if (change.type === "modified") {
          console.log("Blog updated:", change.doc.data());
        } else if (change.type === "removed") {
          console.log("Blog removed:", change.doc.data());
        }
      });
    });
  } catch (error) {
    console.log("Error getting blogs:", error);
  }
};

// Get Blog by ID
export const getBlogById = async (id) => {
  try {
    const blogRef = doc(db, "blogs", id);
    const blogSnapshot = await getDoc(blogRef);
    const blog = blogSnapshot.data();
    console.log(blog);
    return blog;
  } catch (error) {
    console.log("Error getting blog by ID:", error);
  }
};

// Update Blog
export const updateBlog = async (id, body) => {
  try {
    const blogRef = doc(db, "blogs", id);
    await setDoc(blogRef, body); // Use merge to update fields without overwriting
    console.log("Blog updated successfully");
  } catch (error) {
    console.log("Error updating blog:", error);
  }
};

// Delete Blog
export const deleteBlog = async (id) => {
  try {
    const blogRef = doc(db, "blogs", id);
    await deleteDoc(blogRef);
    console.log("Blog deleted successfully");
  } catch (error) {
    console.log("Error deleting blog:", error);
  }
};

// Delete Selected Blogs
export const deleteSelectedBlogs = async (ids) => {
  try {
    if (Array.isArray(ids)) {
      // Deleting multiple blogs
      const deletePromises = ids.map((id) => {
        const blogRef = doc(db, "blogs", id);
        return deleteDoc(blogRef);
      });
      await Promise.all(deletePromises); // Wait for all deletions
      console.log("Selected blogs deleted successfully");
    } else {
      // Deleting a single blog
      const blogRef = doc(db, "blogs", ids);
      await deleteDoc(blogRef);
      console.log("Blog deleted successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
