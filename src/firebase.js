import firebase from "firebase";
import "firebase/firestore";
import "@firebase/auth";
import dotenv from "dotenv";

dotenv.config();

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export { db };
export default firebase;
