import app from 'firebase/app'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCuA0LVImjuvKPn7PnDTY0j3RZIMLg8unI",
    authDomain: "prueba3-78056.firebaseapp.com",
    projectId: "prueba3-78056",
    storageBucket: "prueba3-78056.appspot.com",
    messagingSenderId: "266077921155",
    appId: "1:266077921155:web:15ba8874e03107fa7b60b6"
};

app.initializeApp(firebaseConfig)

export const db = app.firestore()
export const storage = app.storage()
export const auth = firebase.auth()