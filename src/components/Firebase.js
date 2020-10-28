import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCNEXUf-qEVxPMZRNG-MHWjXCp2dRugvvk",
  authDomain: "habescha-fee.firebaseapp.com",
  databaseURL: "https://habescha-fee.firebaseio.com",
  projectId: "habescha-fee",
  storageBucket: "habescha-fee.appspot.com",
  messagingSenderId: "604553906720",
  appId: "1:604553906720:web:3f91cd7a2f8863b434ca45",
  measurementId: "G-SQ4E1TBWNT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;