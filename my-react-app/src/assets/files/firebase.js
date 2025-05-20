import { getFirestore } from "firebase/firestore";
// Імпорт потрібних методів
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, addDoc, query, where, getDocs, orderBy } from "firebase/firestore";

// Твоя конфігурація Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDXLirRS3eHqQjFJErlFhVnh5DaWx10biA",
  authDomain: "my-startup-9f271.firebaseapp.com",
  projectId: "my-startup-9f271",
  storageBucket: "my-startup-9f271.firebasestorage.app",
  messagingSenderId: "584565079375",
  appId: "1:584565079375:web:fb7cbf91b7db79b5f5593a",
  measurementId: "G-67Q95HC2RW"
};

// Ініціалізація додатку
const app = initializeApp(firebaseConfig);
// Отримання об'єкту авторизації
const auth = getAuth(app);

export const db = getFirestore(app);
// ЕКСПОРТ
export { auth };
