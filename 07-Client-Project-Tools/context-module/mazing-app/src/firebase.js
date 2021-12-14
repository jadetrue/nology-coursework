import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAW6QRrwKSCxoFrXf5y_gC00jb-exLo8mA",
    authDomain: "nology-io.firebaseapp.com",
    projectId: "nology-io",
    storageBucket: "nology-io.appspot.com",
    messagingSenderId: "158961884320",
    appId: "1:158961884320:web:3709b7d88f4355b0f5fdc5",
};

export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
