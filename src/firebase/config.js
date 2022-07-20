import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

import { initializeApp } from "firebase/compat/app";
import { getAnalytics } from "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBO0x_D65nWDxyCg70y1LujF-QM1y8snfo",
  authDomain: "concept-brand.firebaseapp.com",
  databaseURL: "https://concept-brand-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "concept-brand",
  storageBucket: "concept-brand.appspot.com",
  messagingSenderId: "937732951648",
  appId: "1:937732951648:web:bc7ed56b3b9ebfe3bb3d05",
  measurementId: "G-T25Q6BSF82"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const fire = firebase;
const auth = firebase.auth();

export { projectStorage, projectFirestore, fire, auth};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);