// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAWJqHH-O3PPq8kO3WIdTNIqoAABl3wUiI",
    authDomain: "clone-70b3b.firebaseapp.com",
    databaseURL: "https://clone-70b3b.firebaseio.com",
    projectId: "clone-70b3b",
    storageBucket: "clone-70b3b.appspot.com",
    messagingSenderId: "961715272497",
    appId: "1:961715272497:web:e4336c73b48d2a9def4e10",
    measurementId: "G-D52TRFMHMH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};