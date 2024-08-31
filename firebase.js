// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics"; // Correct import for analytics
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "inventory-management-3603f.firebaseapp.com",
  projectId: "inventory-management-3603f",
  storageBucket: "inventory-management-3603f.appspot.com",
  messagingSenderId: "293134767489",
  appId: "1:293134767489:web:2f093df12a7422ccc14480",
  measurementId: "G-WJ1M0LK4TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Check if analytics is supported and only then initialize it
let analytics;

if (typeof window !== 'undefined') {
  isAnalyticsSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch((error) => {
    console.error("Error checking analytics support:", error);
  });
}

export { firestore, analytics };