import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  Firestore,
  collection,
  CollectionReference,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAit_BWmuTFJ3dns_yKh727nVSmcq3l0-U",
  authDomain: "ebuddy-recruitment.firebaseapp.com",
  projectId: "ebuddy-recruitment",
  storageBucket: "ebuddy-recruitment.firebasestorage.app",
  messagingSenderId: "325321105496",
  appId: "1:325321105496:web:a19e1bd398b19a6b622a2d",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const usersCollection: CollectionReference = collection(db, "users");

export { db, usersCollection };
