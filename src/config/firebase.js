
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVXc5SAZQCHUC04OMca3JytRxqBerVPh0",
  authDomain: "codepen-clone-ae2ab.firebaseapp.com",
  projectId: "codepen-clone-ae2ab",
  storageBucket: "codepen-clone-ae2ab.appspot.com",
  messagingSenderId: "1097315134909",
  appId: "1:1097315134909:web:9f6bad144af699d58676d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db,auth,app};   