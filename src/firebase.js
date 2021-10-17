import firebase from "firebase";
const firebaseConfig = {
  apiKey: "",
  authDomain: "facebook-clone-a51ed.firebaseapp.com",
  databaseURL: "",
  projectId: "facebook-clone-a51ed",
  storageBucket: "facebook-clone-a51ed.appspot.com",
  messagingSenderId: "319712693077",
  appId: "",
  measurementId: "G-JF5VSBRH1M"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth = firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
