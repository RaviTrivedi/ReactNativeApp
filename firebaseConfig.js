// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAY50y-eU2F68ncqjsKCpepj3ys2TlLlRU",
    authDomain: "new-proj-2dfb1.firebaseapp.com",
    projectId: "new-proj-2dfb1",
    storageBucket: "new-proj-2dfb1.appspot.com",
    messagingSenderId: "456993452684",
    appId: "1:456993452684:web:096b24f73997e5c41981a9",
    measurementId: "G-C0BFPNC9M1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);