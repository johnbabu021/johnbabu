import { initializeApp } from "@firebase/app";
import { getFirestore, collection } from 'firebase/firestore/lite'
const firebaseApp = initializeApp({
    apiKey: "AIzaSyA3vQC8aWp2mQGxO8w38s5ojeUEM4YAjzg",
    authDomain: "personal-website-b3c7e.firebaseapp.com",
    projectId: "personal-website-b3c7e",
    storageBucket: "personal-website-b3c7e.appspot.com",
    messagingSenderId: "886808377327",
    appId: "1:886808377327:web:79cea581c9bbb21005681a",
    measurementId: "G-7C6D35PZWB"
})
const db = getFirestore(firebaseApp)
const messagesCol = collection(db, 'messages')
export default messagesCol;