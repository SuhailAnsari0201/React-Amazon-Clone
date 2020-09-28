import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEMF1cR-aaRYG0_eETWhcQbXoGjdEN_v8",
  authDomain: "react--clone-84dd2.firebaseapp.com",
  databaseURL: "https://react--clone-84dd2.firebaseio.com",
  projectId: "react--clone-84dd2",
  storageBucket: "react--clone-84dd2.appspot.com",
  messagingSenderId: "239236022166",
  appId: "1:239236022166:web:6aad4605a192cb5a6227b7",
  measurementId: "G-CCRZR488S1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
