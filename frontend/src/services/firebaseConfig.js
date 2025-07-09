import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNpEo64raByi3Hukp1Iu9q6EwcQv6bjn0",
  authDomain: "overlays-app-388d7.firebaseapp.com",
  projectId: "overlays-app-388d7",
  storageBucket: "overlays-app-388d7.firebasestorage.app",
  messagingSenderId: "1046033510765",
  appId: "1:1046033510765:web:03d4fc21d85ec7fadc2a64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)