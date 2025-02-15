"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCollection = exports.db = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyAit_BWmuTFJ3dns_yKh727nVSmcq3l0-U",
    authDomain: "ebuddy-recruitment.firebaseapp.com",
    projectId: "ebuddy-recruitment",
    storageBucket: "ebuddy-recruitment.firebasestorage.app",
    messagingSenderId: "325321105496",
    appId: "1:325321105496:web:a19e1bd398b19a6b622a2d",
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)(app);
exports.db = db;
const usersCollection = (0, firestore_1.collection)(db, "users");
exports.usersCollection = usersCollection;
