// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVibNPHqSlgmpzUHXX-sMGQ7U9IU41EBw",
  authDomain: "devils-den-1.firebaseapp.com",
  projectId: "devils-den-1",
  storageBucket: "devils-den-1.appspot.com",
  messagingSenderId: "551826368232",
  appId: "1:551826368232:web:8e29af9a646c47a696cb5d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
