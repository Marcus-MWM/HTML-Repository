import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDN2px-MFqjOSz3EJ7XbcI4D1_zMx0UYeQ",
  authDomain: "fir-fin-d5446.firebaseapp.com",
  projectId: "fir-fin-d5446",
  storageBucket: "fir-fin-d5446.appspot.com",
  messagingSenderId: "800334292763",
  appId: "1:800334292763:web:b09daf52d193714baa15be",
  measurementId: "G-KEVJJLB2CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();