import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUIf6LtQtEYmJfCbhHnIjfJ6e2MunTFO8",
  authDomain: "glance-simple-work-space.firebaseapp.com",
  databaseURL:
    "https://glance-simple-work-space-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "glance-simple-work-space",
  storageBucket: "glance-simple-work-space.appspot.com",
  messagingSenderId: "267272882898",
  appId: "1:267272882898:web:4424d123247d82f834fb0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const timestamp = Timestamp;
const database = getDatabase();

export { auth, db, storage, timestamp, database };
