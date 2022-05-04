import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAzdAW9GoRsYMRfA9UUoMdyj4SmKzI5anA",
    authDomain: "dreamloud-authentication.firebaseapp.com",
    projectId: "dreamloud-authentication",
    storageBucket: "dreamloud-authentication.appspot.com",
    messagingSenderId: "810271810023",
    appId: "1:810271810023:web:b60f42da4f637d5ac81d42",
    measurementId: "G-XGSKGM5T4R"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);