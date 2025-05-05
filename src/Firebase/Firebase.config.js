import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDfD7NfDBRY7N0N3NJ9KZ4MeJzUCY4VPLo",
  authDomain: "event-nest-e98b6.firebaseapp.com",
  projectId: "event-nest-e98b6",
  storageBucket: "event-nest-e98b6.firebasestorage.app",
  messagingSenderId: "39122998081",
  appId: "1:39122998081:web:8b0b158b78f618ba3147c0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);