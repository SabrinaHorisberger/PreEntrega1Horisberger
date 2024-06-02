
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6yT5kf7t8X6Efe3UDe6jlGjYTZChTlyA",
  authDomain: "sabrina-proyecto.firebaseapp.com",
  projectId: "sabrina-proyecto",
  storageBucket: "sabrina-proyecto.appspot.com",
  messagingSenderId: "833799446713",
  appId: "1:833799446713:web:a3f5361bdb274d905abb68",
  measurementId: "G-3V75FQDC84"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };