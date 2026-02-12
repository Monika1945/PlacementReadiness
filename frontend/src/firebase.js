import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqsMR7UUVCKGqZPeMJ23jvwbmyA9FHAZg",
  authDomain: "placementreadiness.firebaseapp.com",
  projectId: "placementreadiness",
  storageBucket: "placementreadiness.firebasestorage.app",
  messagingSenderId: "854764743826",
  appId: "1:854764743826:web:5854f88f2ec21c338d8a4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
