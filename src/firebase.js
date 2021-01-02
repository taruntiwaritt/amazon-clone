import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUjFl_S5vVNwcJpZ6PQxVlCSbqx_W_mYs",
  authDomain: "clone-b3059.firebaseapp.com",
  projectId: "clone-b3059",
  storageBucket: "clone-b3059.appspot.com",
  messagingSenderId: "904067759657",
  appId: "1:904067759657:web:1d522133f67dc784a3a638",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
