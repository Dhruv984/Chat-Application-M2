import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwHKXLzvlyZR02TPsqUom1aRCXTrXqUeg",
    authDomain: "chatapp-e0b77.firebaseapp.com",
    projectId: "chatapp-e0b77",
    storageBucket: "chatapp-e0b77.appspot.com",
    messagingSenderId: "952088663362",
    appId: "1:952088663362:web:25f6b0b7a70aec2333a4db"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);//connects react frontend to firebase backend

  const db= firebaseApp.firestore();  //db is to access the datasbase

  const auth = firebase.auth(); //enabling the firebase authentication
  const provider= new firebase.auth.GoogleAuthProvider(); // enabling google authentication

  export {auth,provider};
  export default db; //because it is frequently used


