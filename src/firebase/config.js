import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtggIJ3S5ZF_hb8mivyflwckOEodPJA7U",
  authDomain: "cultura-rockera.firebaseapp.com",
  projectId: "cultura-rockera",
  storageBucket: "cultura-rockera.appspot.com",
  messagingSenderId: "1004906803428",
  appId: "1:1004906803428:web:2bffee5c787ead9ac57cf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);
