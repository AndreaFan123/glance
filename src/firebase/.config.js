import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUIf6LtQtEYmJfCbhHnIjfJ6e2MunTFO8",
  authDomain: "glance-simple-work-space.firebaseapp.com",
  projectId: "glance-simple-work-space",
  storageBucket: "glance-simple-work-space.appspot.com",
  messagingSenderId: "267272882898",
  appId: "1:267272882898:web:4424d123247d82f834fb0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { firebaseAuth, firestoreDB };
