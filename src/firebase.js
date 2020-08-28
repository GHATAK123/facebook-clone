import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCI8Ru6dzcN8Tyb6d0u0aljPRyheH35M3Q",
  authDomain: "facebook-clone-a51ed.firebaseapp.com",
  databaseURL: "https://facebook-clone-a51ed.firebaseio.com",
  projectId: "facebook-clone-a51ed",
  storageBucket: "facebook-clone-a51ed.appspot.com",
  messagingSenderId: "319712693077",
  appId: "1:319712693077:web:8bfeec9e437f884bd67ddc",
  measurementId: "G-JF5VSBRH1M"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth = firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;