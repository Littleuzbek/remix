// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

// LOADER FUNCTIONS

export const getProducts = async () => {
  const products = [];
  const snapshot = getDocs(collection(db, "exko", "data", "items"));

  (await snapshot).forEach((doc) => {
    products.push(doc.data());
  });

  if (products) {
    return products;
  } else {
    return null;
  }
};

export const getUserData = async (userId) => {
  const userDoc = (
    await getDoc(doc(db, "exko", "users", "users", userId))
  ).data();
  return userDoc;
};

export const isLogged = () => {
  return new Promise((resolve) => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      unsub();
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    });
  });
};

export const getUserOrders = async () => {
  const orders = [];
  const userId = auth.currentUser.uid;
  const snapshot = getDocs(
    collection(db, "exko", "users", "users", userId, "orders")
  );

  (await snapshot).forEach((doc) => {
    orders.push(doc.data());
  });

  return orders;
};

// ACTION FUNCTIONS

export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email.trim() === "" || password.trim() === "") {
    return json({ error: "Please fill out the form" }, { status: 400 });
  }

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    return res;
  } catch (err) {
    return null;
  }
};