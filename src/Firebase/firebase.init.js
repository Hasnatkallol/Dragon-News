// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd6bnr_7MLqIbjgC9BjZgWECkszOqUT3E",
  authDomain: "dragon-news-b2263.firebaseapp.com",
  projectId: "dragon-news-b2263",
  storageBucket: "dragon-news-b2263.firebasestorage.app",
  messagingSenderId: "31227707046",
  appId: "1:31227707046:web:e4a9f75e685d3fdcf47e67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);