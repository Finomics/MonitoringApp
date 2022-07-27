import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import '@firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDF4JGpuMAirmsdBHtf7G1ShatHTYrT8fA",
    authDomain: "hassan-2443.firebaseapp.com",
    databaseURL: "https://hassan-2443.firebaseio.com",
    projectId: "hassan-2443",
    storageBucket: "hassan-2443.appspot.com",
    messagingSenderId: "271472254774",
    appId: "1:271472254774:web:4c7f863850f27c2f"
});

let db = firebase.firestore();

export default {
  firebase, db
}