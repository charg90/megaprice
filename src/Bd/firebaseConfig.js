import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxQc2zupb0IosB7KLdQ7bjK7_TKO3wzxo",
  authDomain: "mega-ac50d.firebaseapp.com",
  projectId: "mega-ac50d",
  storageBucket: "mega-ac50d.appspot.com",
  messagingSenderId: "1040760876015",
  appId: "1:1040760876015:web:8d876fc44d281d8a9c641a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

///dot env
