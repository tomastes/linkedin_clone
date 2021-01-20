import react from 'react'
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBNNW9RiEc1H7QcndxiGDiPLLnp3fxaao0",
    authDomain: "linkedin-clone-e9098.firebaseapp.com",
    projectId: "linkedin-clone-e9098",
    storageBucket: "linkedin-clone-e9098.appspot.com",
    messagingSenderId: "533917479248",
    appId: "1:533917479248:web:925763e282f97d9905bc55"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth};
  export default firebaseApp;

