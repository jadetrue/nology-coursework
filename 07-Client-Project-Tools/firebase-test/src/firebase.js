// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, collection, getDocs} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAW6QRrwKSCxoFrXf5y_gC00jb-exLo8mA",
    authDomain: "nology-io.firebaseapp.com",
    projectId: "nology-io",
    storageBucket: "nology-io.appspot.com",
    messagingSenderId: "158961884320",
    appId: "1:158961884320:web:3709b7d88f4355b0f5fdc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore};
