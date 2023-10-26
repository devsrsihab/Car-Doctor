// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGf-mpZyFHSu_gKlM2DCkG71QmLvungCE",
  authDomain: "cardoctor-4fffc.firebaseapp.com",
  projectId: "cardoctor-4fffc",
  storageBucket: "cardoctor-4fffc.appspot.com",
  messagingSenderId: "723219094692",
  appId: "1:723219094692:web:fe15d2a8d4cfc2e29fda31",
  measurementId: "G-XGFPGLNFXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth