import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYrvxjfW0why-7tegKAtmj18RZUafMtyc",
  authDomain: "independent-service-prov-6cce2.firebaseapp.com",
  projectId: "independent-service-prov-6cce2",
  storageBucket: "independent-service-prov-6cce2.appspot.com",
  messagingSenderId: "1047444316149",
  appId: "1:1047444316149:web:1b2fe301544116d108cabc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;