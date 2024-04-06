// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiDJIUI7oJUHvtL5IgvAzoAApUkDYck0o",
  authDomain: "junigadi-b96b8.firebaseapp.com",
  projectId: "junigadi-b96b8",
  storageBucket: "junigadi-b96b8.appspot.com",
  messagingSenderId: "194368694292",
  appId: "1:194368694292:web:c4eb25682bae0d0db2df01",
  measurementId: "G-R60C3ZP5RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);