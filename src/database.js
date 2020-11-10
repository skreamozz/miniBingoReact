import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBupPmEaV5-Q_KenRUfa_mLDD7D5HRiCtA",
  authDomain: "bingovirtual-c3b03.firebaseapp.com",
  databaseURL: "https://bingovirtual-c3b03.firebaseio.com",
  projectId: "bingovirtual-c3b03",
  storageBucket: "bingovirtual-c3b03.appspot.com",
  messagingSenderId: "930457004482",
  appId: "1:930457004482:web:a5f1240e01a23729324e5b",
  measurementId: "G-ZLV1PZFBSQ",
};
let fire;
if (!firebase.apps.length) {
  fire = firebase.initializeApp(firebaseConfig);
} else {
  fire = firebase.app();
}

export const db = fire.firestore().collection("prueba");
