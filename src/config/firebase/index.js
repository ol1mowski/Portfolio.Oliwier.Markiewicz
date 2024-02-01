import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfaqlsIbITC4yQreazon8vvsyxWJgNbPg",
  authDomain: "portfolio-a109e.firebaseapp.com",
  projectId: "portfolio-a109e",
  storageBucket: "portfolio-a109e.appspot.com",
  messagingSenderId: "1094144202567",
  appId: "1:1094144202567:web:472c751cf8fc1ad4e79e62"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);