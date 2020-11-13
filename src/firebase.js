import firebase from 'firebase'
import 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyDy6GMYg_7resIyUFT2KxnvhZYCm4p-mGM",
  authDomain: "segpar-2a894.firebaseapp.com",
  databaseURL: "https://segpar-2a894.firebaseio.com",
  projectId: "segpar-2a894",
  storageBucket: "segpar-2a894.appspot.com",
  messagingSenderId: "841257374717",
  appId: "1:841257374717:web:1aaf071d81fc1d5f37bf94"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  export const bdd=firebase.firestore();