// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_DILSHOD_API_KEY,
  authDomain: process.env.FIREBASE_DILSHOD_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_DILSHOD_PROJECT_ID,
  storageBucket: process.env.FIREBASE_DILSHOD_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_DILSHOD_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_DILSHOD_APP_ID,
  measurementId: process.env.FIREBASE_DILSHOD_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
