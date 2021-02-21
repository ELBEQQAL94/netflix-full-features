import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAixpNu9eDL0DrBvqFKF5xSpMBPDx1_eDc",
  authDomain: "netflix-full-73728.firebaseapp.com",
  projectId: "netflix-full-73728",
  storageBucket: "netflix-full-73728.appspot.com",
  messagingSenderId: "943349363314",
  appId: "1:943349363314:web:abc0125657951b4add48eb",
};
const firebase = Firebase.initializeApp(config);

export { firebase };
