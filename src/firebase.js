import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5cPEsp3J2usv0Pv9aZ2jMKaGXCx4My28",
  authDomain: "whenthelightdoesnotshine.firebaseapp.com",
  projectId: "whenthelightdoesnotshine",
  storageBucket: "whenthelightdoesnotshine.appspot.com",
  messagingSenderId: "192574435410",
  appId: "1:192574435410:web:960b5a393fbd25120f6f8b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // connects everything to firebase
const db = firebaseApp.firestore(); // access to database
const auth = firebase.auth(); // access to authentication

export { db, auth }; // need access to these elsewhere
