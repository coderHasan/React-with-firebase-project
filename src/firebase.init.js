// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkgh7R71F98ie8LrkVrBbXNPwdgtELIbc",
  authDomain: "dragon-news-e32be.firebaseapp.com",
  projectId: "dragon-news-e32be",
  storageBucket: "dragon-news-e32be.firebasestorage.app",
  messagingSenderId: "905160277082",
  appId: "1:905160277082:web:81d2b34de6ba97d1c8ec63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
