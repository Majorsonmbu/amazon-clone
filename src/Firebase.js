import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBRYe3Ha8aJdBRH5C5Rt5yaQGT2wcsmys",
    authDomain: "clone-2e77f.firebaseapp.com",
    projectId: "clone-2e77f",
    storageBucket: "clone-2e77f.appspot.com",
    messagingSenderId: "143235585100",
    appId: "1:143235585100:web:47d67919ca3791e8db90e9",
    measurementId: "G-FL2LX4XKJN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};