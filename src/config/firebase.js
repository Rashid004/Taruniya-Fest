/** @format */
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5F0eNb_GFY1icHKojrDuACIvjLd8qdgg",
  authDomain: "tarunya-fest.firebaseapp.com",
  projectId: "tarunya-fest",
  storageBucket: "tarunya-fest.firebasestorage.app",
  messagingSenderId: "196295866314",
  appId: "1:196295866314:web:a729004e3912e1348d0133",
  measurementId: "G-FEJSZXTWZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);
export { db, auth };
