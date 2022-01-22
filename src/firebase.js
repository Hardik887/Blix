import firebase from "firebase";
import "firebase/firestore";
import "@firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkcXv-HUtI9IR20OtZtjhVEe83DbWilb4",
  authDomain: "blix-c9efc.firebaseapp.com",
  projectId: "blix-c9efc",
  storageBucket: "blix-c9efc.appspot.com",
  messagingSenderId: "920006849900",
  appId: "1:920006849900:web:840d3d5d93e54fb7f32f49", 
}); 

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export { db };
export default firebase;
