import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACAfaY0mu8sRgA4RYCiwirhTqm7LmDjJE",
  authDomain: "tailormanagement-21f96.firebaseapp.com",
  projectId: "tailormanagement-21f96",
  storageBucket: "tailormanagement-21f96.appspot.com",
  messagingSenderId: "698339084511",
  appId: "1:698339084511:web:c4944f6555a47e21a6016a",
  measurementId: "G-CYF8Q8SFZT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
