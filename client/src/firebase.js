// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbq-3zIntJCb7K-M44o1_kwhjtwWntoSU",
  authDomain: "tclone-4c347.firebaseapp.com",
  projectId: "tclone-4c347",
  storageBucket: "tclone-4c347.appspot.com",
  messagingSenderId: "47707029159",
  appId: "1:47707029159:web:5f26e4d370730152e8a582",
  measurementId: "G-1ZG0PJ60GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
