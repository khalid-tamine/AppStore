import firebase from "firebase/compat/app";


const firebaseConfig = {
    apiKey: "AIzaSyB38rsAhCKe_Xv4Ikm9M81JSNJSxZAw9cM",
    authDomain: "app-store-recipes.firebaseapp.com",
    projectId: "app-store-recipes",
    storageBucket: "app-store-recipes.appspot.com",
    messagingSenderId: "55334384122",
    appId: "1:55334384122:web:c8ec701374b0fa1b9d3443",
    measurementId: "G-VYQ9YS030Z"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase