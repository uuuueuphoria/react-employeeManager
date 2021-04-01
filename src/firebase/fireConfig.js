// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//react app needs to know about your firebase app
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCX_uLVG1vYwuGZm8XY58sx1cw-lN3-ois',
  authDomain: 'react-employee-manager-wanlun.firebaseapp.com',
  projectId: 'react-employee-manager-wanlun',
  storageBucket: 'react-employee-manager-wanlun.appspot.com',
  messagingSenderId: '348678310535',
  appId: '1:348678310535:web:2d228a4687f3a390a2c622',
  measurementId: 'G-K2FGFSSNLM',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const db = firebase.firestore();
// const storage = firebase.storage();

// export { auth, db, storage };

export default firebaseApp;
