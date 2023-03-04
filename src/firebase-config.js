import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmhC-xWmaQMoWo-3colJOSao5WUkAzVpU",
  authDomain: "cloudffect-auth.firebaseapp.com",
  projectId: "cloudffect-auth",
  storageBucket: "cloudffect-auth.appspot.com",
  messagingSenderId: "129879580835",
  appId: "1:129879580835:web:3d19553fa7023a54041f16",
  measurementId: "G-F1TWBKW2PJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);