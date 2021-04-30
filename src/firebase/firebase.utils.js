import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBFAGEnnmkS7E3QB-QLfLWN7ggxGphMfyg",
  authDomain: "shop-db-a6b1d.firebaseapp.com",
  projectId: "shop-db-a6b1d",
  storageBucket: "shop-db-a6b1d.appspot.com",
  messagingSenderId: "955563029818",
  appId: "1:955563029818:web:fe79d24dba3db038114c03",
  measurementId: "G-HW2BJ9QLZJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
