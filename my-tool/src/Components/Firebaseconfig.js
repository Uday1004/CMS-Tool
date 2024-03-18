 import { initializeApp } from "firebase/app";
 import {getFirestore} from '@firebase/firestore';
 import {getStorage} from '@firebase/storage';
// import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyAf1O757SXCqqq0ZdcJ3tfAJnj7B531XLA",
  authDomain: "content-management-tool-3b2a0.firebaseapp.com",
  databaseURL: "https://content-management-tool-3b2a0-default-rtdb.firebaseio.com",
  projectId: "content-management-tool-3b2a0",
  storageBucket: "content-management-tool-3b2a0.appspot.com",
  messagingSenderId: "260099902710",
  appId: "1:260099902710:web:dc369a3cedc26f1161b0d7",
  measurementId: "G-PJPS0TPTCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)
export {firestore , storage};
// const analytics = getAnalytics(app);