// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbj3lIvc6wBMxZ4g3nnETd3nQJ9kAjWKo",
  authDomain: "fir-react-part-2.firebaseapp.com",
  projectId: "fir-react-part-2",
  storageBucket: "fir-react-part-2.appspot.com",
  messagingSenderId: "299920802183",
  appId: "1:299920802183:web:c42a1be5212a8a83915322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;