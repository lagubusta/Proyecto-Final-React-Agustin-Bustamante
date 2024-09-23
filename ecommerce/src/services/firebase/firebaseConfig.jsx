// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCxeEvQ3ht1y9TfjzDFJcO-1AI6E-6RAK0",
  authDomain: "tienda-online-df564.firebaseapp.com",
  projectId: "tienda-online-df564",
  storageBucket: "tienda-online-df564.appspot.com",
  messagingSenderId: "49747043693",
  appId: "1:49747043693:web:e14b9800ffc839d3e7e664"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
