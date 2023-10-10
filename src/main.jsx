import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8x150fyv8z5FUngEoIAj6NBp_qYFCuno",
  authDomain: "projectreactluigi.firebaseapp.com",
  projectId: "projectreactluigi",
  storageBucket: "projectreactluigi.appspot.com",
  messagingSenderId: "67286110291",
  appId: "1:67286110291:web:b65f54977bc595a55cb6a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>

    <App />
  </ChakraProvider>
)
