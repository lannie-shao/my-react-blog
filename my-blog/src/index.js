import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3Qby1rsdLb7ekjmc31YM9imxcW7RTi3A",
  authDomain: "my-blog-95b7a.firebaseapp.com",
  projectId: "my-blog-95b7a",
  storageBucket: "my-blog-95b7a.appspot.com",
  messagingSenderId: "560628854248",
  appId: "1:560628854248:web:09d214d584a25738f8485d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
