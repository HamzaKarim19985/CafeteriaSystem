import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCNsRrb_mEu9ejjCJPFFFwyhtfYqT5GwIs",
  authDomain: "cps888-project.firebaseapp.com",
  databaseURL: "https://cps888-project.firebaseio.com",
  projectId: "cps888-project",
  storageBucket: "cps888-project.appspot.com",
  messagingSenderId: "498425923670",
  appId: "1:498425923670:web:6da0604c30009930fc53f7",
  measurementId: "G-RZ3NXQ720H"
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default firebase;
