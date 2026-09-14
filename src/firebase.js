import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwCvGuaLmG_LD5IBO-tuhBGDNFZ94ht24",
  authDomain: "clear-bin-bd0e7.firebaseapp.com",
  projectId: "clear-bin-bd0e7",
  storageBucket: "clear-bin-bd0e7.firebasestorage.app",
  messagingSenderId: "134027761538",
  appId: "1:134027761538:web:6625973343ae00a239619b",
  measurementId: "G-06KW2KZ74Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
