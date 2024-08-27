// // // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import firebase from 'firebase/compat/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAQVbiMzK7NoDPAeDP8yqxLUZMtwH3Xit8",
//   authDomain: "youthvoterproject-5a5dd.firebaseapp.com",
//   projectId: "youthvoterproject-5a5dd",
//   storageBucket: "youthvoterproject-5a5dd.appspot.com",
//   messagingSenderId: "403644305908",
//   appId: "1:403644305908:web:863eda1083b7b9ffd329a1",
//   measurementId: "G-BSS4RETFT0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export {db, doc, setDoc, firebase};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3wDpemNIwkqhrgJs0w7r30BOR2szlP50",
  authDomain: "youthvoterprojecttesting.firebaseapp.com",
  projectId: "youthvoterprojecttesting",
  storageBucket: "youthvoterprojecttesting.appspot.com",
  messagingSenderId: "842888375684",
  appId: "1:842888375684:web:abe5dab6b218540fb281d1",
  measurementId: "G-0Z7NB9BV6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, doc, setDoc, firebase};