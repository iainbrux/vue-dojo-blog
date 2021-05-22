import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUuxumyPEgtPEjuTXkFd_LP7e6x1EfGYQ",
  authDomain: "netninja-vue-projects.firebaseapp.com",
  projectId: "netninja-vue-projects",
  storageBucket: "netninja-vue-projects.appspot.com",
  messagingSenderId: "14958471113",
  appId: "1:14958471113:web:a32bc61b667faf315faa18",
};

//initialise firebase
firebase.initializeApp(firebaseConfig);

//initialise firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
