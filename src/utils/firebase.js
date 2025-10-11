// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDks73B4V-5t-Xc6jppPiv495gFp8TWVVU",
  authDomain: "netflixgpt-2f236.firebaseapp.com",
  projectId: "netflixgpt-2f236",
  storageBucket: "netflixgpt-2f236.firebasestorage.app",
  messagingSenderId: "35869436035",
  appId: "1:35869436035:web:7555ee32c9acb8a63d13b6",
  measurementId: "G-W2BCTJ24Z2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
