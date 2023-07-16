import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCM2nj-_8fuc4iiGlsEknVhJ6_Gvv069Gg",
  authDomain: "cartitem-637cb.firebaseapp.com",
  projectId: "cartitem-637cb",
  storageBucket: "cartitem-637cb.appspot.com",
  messagingSenderId: "714982253159",
  appId: "1:714982253159:web:c2405308957c9ce8f3eac2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


