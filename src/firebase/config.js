import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
  
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPJC0u9gxicPwITS40G-kxboEWgKjQyXY",
    authDomain: "firegram-5688e.firebaseapp.com",
    projectId: "firegram-5688e",
    storageBucket: "firegram-5688e.appspot.com",
    messagingSenderId: "46720658215",
    appId: "1:46720658215:web:32f2d0ec9d16e2db8bd702"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projstor = firebase.storage();
const projfire = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projstor, projfire, timestamp };