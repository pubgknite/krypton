import firebase from "firebase"



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwB0zL_amh3Ud8BZldnfbXC8mCM_yXvFk",
  authDomain: "f3token.firebaseapp.com",
  databaseURL: "https://f3token-default-rtdb.firebaseio.com",
  projectId: "f3token",
  storageBucket: "f3token.appspot.com",
  messagingSenderId: "539523420067",
  appId: "1:539523420067:web:1f745d0e8ca0c6bd2a5416",
  measurementId: "G-RGHEQ80R54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
