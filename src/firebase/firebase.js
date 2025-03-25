//implemented Firebase SDK in React
//SDK (Software Development Kit) is a collection of tools, libraries, and APIs that 
// help developers integrate a service into their applications.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJgp1_i8Knw9vrrQuN0yje5h_qpvAFyYc",
  authDomain: "ai-cancer-detection-system.firebaseapp.com",
  projectId: "ai-cancer-detection-system",
  storageBucket: "ai-cancer-detection-system.firebasestorage.app",
  messagingSenderId: "916435214723",
  appId: "1:916435214723:web:79bcd5a63aca599f0dd6b6",
  measurementId: "G-C9F3T4S31D"
  // connect your front-end application to Firebase
  //allow your React app to authenticate and interact with Firebase services (Firebase SDK Initialization)
  
  //allow your React app to read and write data to the Firestore database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };