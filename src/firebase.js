import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDM5xxWy1a7qA3hM7gZ8gA0mAT7Oy4wdq0",
  authDomain: "shopping-app-b3e67.firebaseapp.com",
  projectId: "shopping-app-b3e67",
  storageBucket: "shopping-app-b3e67.appspot.com",
  messagingSenderId: "601368314986",
  appId: "1:601368314986:web:2c12258f785aeddaabb613",
  measurementId: "G-QDS2EN7FH8"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
