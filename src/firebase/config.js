// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm71iOZuj_VHuWGFnI4sfbUtG6Lvvm4e4",
  authDomain: "camisetasfepid.firebaseapp.com",
  projectId: "camisetasfepid",
  storageBucket: "camisetasfepid.appspot.com",
  messagingSenderId: "525115099267",
  appId: "1:525115099267:web:1c0a9b53bfee6ef9d733b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);