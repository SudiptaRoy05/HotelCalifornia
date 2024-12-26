
import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAvrw96YW86615DZWwV-LmvkY7k0Kpl1c",
    authDomain: "book-your-hotel-18c2b.firebaseapp.com",
    projectId: "book-your-hotel-18c2b",
    storageBucket: "book-your-hotel-18c2b.firebasestorage.app",
    messagingSenderId: "116906370082",
    appId: "1:116906370082:web:4f7b65947d52b32151d67b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;