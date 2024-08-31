// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2fhdgldtUdOcZccr7_YA9O12WqZsayks",
  authDomain: "registro-bcbcd.firebaseapp.com",
  projectId: "registro-bcbcd",
  storageBucket: "registro-bcbcd.appspot.com",
  messagingSenderId: "687436586141",
  appId: "1:687436586141:web:10b6055c74fb518f240874"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;