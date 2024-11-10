/** @format */

import { doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// Create Blog
export const createBlog = async (body) => {
  try {
    const blogRef = doc(db, "blogs", body.id);
    await setDoc(blogRef, body);
    console.log("Blog created successfully");
  } catch (error) {
    console.log(error);
  }
};

// Get all Blogs
export const getBlogs = async () => {
  try {
    const blogRef = doc(db, "blogs");
    const blogSnapshot = await getDocs(blogRef);
    const blogs = blogSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(blogs);
    return blogs;
  } catch (error) {
    console.log(error);
  }
};
