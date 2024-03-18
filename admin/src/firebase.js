import { initializeApp } from "firebase/app";
import { getStorage,ref } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDu_O-byohBQQXwJxGU1PvWuLnJv9Yuejw",
    authDomain: "netflixclone-cb471.firebaseapp.com",
    projectId: "netflixclone-cb471",
    storageBucket: "netflixclone-cb471.appspot.com",
    messagingSenderId: "839057540097",
    appId: "1:839057540097:web:0f291b22778d030aba6c00",
    measurementId: "G-JJ6VDYJEBK"
  };



// firebase.initializeApp(firebaseConfig)

const app = initializeApp(firebaseConfig)
const storage = getStorage(); 
export default storage;