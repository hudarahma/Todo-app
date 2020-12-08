
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAHYboSi-0PBxy-VmetKX6mcWR_mgsTX7Q",
//     authDomain: "todo-app-88cb5.firebaseapp.com",
//     projectId: "todo-app-88cb5",
//     storageBucket: "todo-app-88cb5.appspot.com",
//     messagingSenderId: "467409236497",
//     appId: "1:467409236497:web:b6b78f7d887bd84db7f7b0",
//     measurementId: "G-GXZZ24GB6G"
// };


import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHYboSi-0PBxy-VmetKX6mcWR_mgsTX7Q",
    authDomain: "todo-app-88cb5.firebaseapp.com",
    projectId: "todo-app-88cb5",
    storageBucket: "todo-app-88cb5.appspot.com",
    messagingSenderId: "467409236497",
    appId: "1:467409236497:web:b6b78f7d887bd84db7f7b0",
    measurementId: "G-GXZZ24GB6G"
});

const db = firebaseApp.firestore();

export  default db ;