// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByEf2NwFXfadmzhlD-a2RDMzXXsWGtRMQ",
  authDomain: "uzrasai-23b0d.firebaseapp.com",
  projectId: "uzrasai-23b0d",
  storageBucket: "uzrasai-23b0d.firebasestorage.app",
  messagingSenderId: "699469510450",
  appId: "1:699469510450:web:16c2b66957457a0bab492b",
  measurementId: "G-MSGX0ZT6LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);