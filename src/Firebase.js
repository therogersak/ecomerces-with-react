import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKGMu5lDXJ96LpZzgg46PYrLZcw-V6hog",
  authDomain: "flipkart333-bc111.firebaseapp.com",
  projectId: "flipkart333-bc111",
  storageBucket: "flipkart333-bc111.appspot.com",
  messagingSenderId: "934433673567",
  appId: "1:934433673567:web:37ba41bdf3c505f436e6ea",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
