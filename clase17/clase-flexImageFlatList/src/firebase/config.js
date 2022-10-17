import app from 'firebase/app'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC0_-mnzoaKOFVpBJRXUT21d4FzU2qsvxc",
    authDomain: "prog03tt-tp.firebaseapp.com",
    projectId: "prog03tt-tp",
    storageBucket: "prog03tt-tp.appspot.com",
    messagingSenderId: "640737354104",
    appId: "1:640737354104:web:c8eca25067735f6f00288d"
  };

  app.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const db = app.firestore()
  export const storage = app.storage()