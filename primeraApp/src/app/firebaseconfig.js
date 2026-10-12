
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from "firebase/auth"; //Autentificacion

const firebaseConfig = {
  apiKey: "AIzaSyBvbsbPv3awbg-PFlXNkFbTMMyjmO0o_O0",
  authDomain: "appi-2026a.firebaseapp.com",
  projectId: "appi-2026a",
  storageBucket: "appi-2026a.firebasestorage.app",
  messagingSenderId: "967225620305",
  appId: "1:967225620305:web:4a2112ef4b157c8b198570",
  measurementId: "G-TBJLDS55RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getDatabase(app);
export const auth=getAuth(app);