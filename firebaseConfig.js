import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAc38M_vaXuHH1p6YE0a8LGh3MYm-4pvZ0",
  authDomain: "react-firebase-auth-6270e.firebaseapp.com",
  databaseURL: "https://chitrakala-15310-default-rtdb.firebaseio.com",
  projectId: "chitrakala-15310",
  storageBucket: "react-firebase-auth-6270e.appspot.com",
  messagingSenderId: "854920747284",
  appId: "1:83091629514:web:99702034755a934a5a9b33",
});

export default firebaseConfig;