// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { redirect } from "@remix-run/react";
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
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

// LOADER FUNCTIONS

export const getProducts = async () => {
  const products = [];
  const snapshot = await getDocs(collection(db, "exko", "data", "items"));

  snapshot.forEach((doc) => {
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

export const getUserOrders = async (userId) => {
  const getOrders = await getDocs(
    collection(db, "exko", "users", "users", userId, "orders")
  );
  const allOrders = [];

  getOrders?.forEach((item) => allOrders.push(item.data()));

  if (allOrders?.length !== 0) {
    return allOrders;
  }

  if (allOrders?.length === 0) {
    return 0;
  }
};

// ACTION FUNCTIONS

export const login = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    if (user?.user?.uid) {
      const userDoc = await getUserData(user.user.uid);
      if (userDoc) {
        return redirect(`/user/${user.user.uid}/main`);
        // return {
        //   success: true,
        //   userData: userData,
        // };
      }
    } else {
      return {
        success: false,
        error: "email or password is wrong!",
      };
    }
  } catch (error) {
    if (error.code === "auth/invalid-credential") {
      return {
        success: false,
        error: "email or password is wrong!",
      };
    } else if (error.code === "auth/too-many-requests") {
      return {
        success: false,
        error: "too many attempts",
      };
    } else {
      return {
        success: false,
        error: "Please try again later",
      };
    }
  }
};

export const signUp = async (formData) => {
  let newUserData = formData.get("newUserData");
  const name = formData.get("name");
  const email = formData.get("email");
  newUserData = JSON.parse(newUserData);

  if (newUserData) {
    await setDoc(doc(db, "exko", "users", "users", newUserData?.uid), {
      banned: false,
      birthDay: null,
      email: email,
      gender: null,
      isAdmin: false,
      name: name,
      number: null,
      surname: null,
      createdAt: serverTimestamp(),
    });

    return redirect(`/user/${newUserData.uid}/main`);
  } else {
    return false;
  }
};
