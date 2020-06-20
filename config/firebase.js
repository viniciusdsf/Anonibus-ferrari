import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBi1tjOu350VnIli-f3aHIs3DfuEHYkch0",
  authDomain: "anonibus-ferrari.firebaseapp.com",
  databaseURL: "https://anonibus-ferrari.firebaseio.com",
  projectId: "anonibus-ferrari",
  storageBucket: "anonibus-ferrari.appspot.com",
  messagingSenderId: "965724716494",
  appId: "1:965724716494:web:ba8b6d280eee17b74fbf9f"
};
export default !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) : firebase.app();