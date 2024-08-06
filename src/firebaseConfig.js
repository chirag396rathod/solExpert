// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_BASE_API_KEY,
  authDomain: import.meta.env.VITE_BASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_BASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_BASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_BASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_BASE_APP_ID,
  measurementId: import.meta.env.VITE_BASE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_BASE_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
const functions = firebase.functions();
const storage = firebase.storage();
export { app, analytics, db, functions, storage };
