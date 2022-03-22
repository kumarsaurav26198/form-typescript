 import "firebase/compat/database";
 import firebase from "firebase/compat/app";

 
 const firebaseConfig = {
    apiKey: "AIzaSyDOfNzETEiRNjoVTlryhtVZE8ieqNPDLAE",
    authDomain: "form-e238e.firebaseapp.com",
    databaseURL: "https://form-e238e-default-rtdb.firebaseio.com",
    projectId: "form-e238e",
    storageBucket: "form-e238e.appspot.com",
    messagingSenderId: "679127455217",
    appId: "1:679127455217:web:026f0ded2fe99b82216050"
  };


  const  fireDb=firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
