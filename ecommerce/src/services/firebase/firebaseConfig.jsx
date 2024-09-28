// ECOMMERCE
import { initializeApp } from "firebase/app";
// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBXlHgWH6F2cAZDhrpbQc33Ha2aNr77o2o",
  authDomain: "ecommerce-24a95.firebaseapp.com",
  projectId: "ecommerce-24a95",
  storageBucket: "ecommerce-24a95.appspot.com",
  messagingSenderId: "152868933457",
  appId: "1:152868933457:web:5f825ba54bb40b47590d70"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)