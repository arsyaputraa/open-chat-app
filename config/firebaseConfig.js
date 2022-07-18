// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAlorWqSFlpNq8vO4ZuKJRP062c7gamHS0',
  authDomain: 'next-chat-8c526.firebaseapp.com',
  projectId: 'next-chat-8c526',
  storageBucket: 'next-chat-8c526.appspot.com',
  messagingSenderId: '1067155264621',
  appId: '1:1067155264621:web:2bc9f5bd1aaa24eb379b64',
  measurementId: 'G-W5P899E71F',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
