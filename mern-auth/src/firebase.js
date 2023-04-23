// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4P_c3xJFi3P6KcqovceV85S6qeTG3WC8",
  authDomain: "auth-2adef.firebaseapp.com",
  projectId: "auth-2adef",
  storageBucket: "auth-2adef.appspot.com",
  messagingSenderId: "248857905762",
  appId: "1:248857905762:web:ccfaf60461777eefbb1f3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)