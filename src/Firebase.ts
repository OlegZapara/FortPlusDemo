import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMkFJWCWShAbwXYKtm8NJTU2gjnPxZ2V4",
  authDomain: "fortplus-3613b.firebaseapp.com",
  projectId: "fortplus-3613b",
  storageBucket: "fortplus-3613b.appspot.com",
  messagingSenderId: "984096375035",
  appId: "1:984096375035:web:38e5f15456a05a8e48305e",
  measurementId: "G-ZCT74D7R7L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);