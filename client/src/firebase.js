// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-58945.firebaseapp.com",
  projectId: "real-estate-58945",
  storageBucket: "real-estate-58945.appspot.com",
  messagingSenderId: "186436093030",
  appId: "1:186436093030:web:ad79b0dfe6d37d568159a7",
  measurementId: "G-HS8X3PMF5N"
  // authDomain: 'mern-estate.firebaseapp.com',
  // projectId: 'mern-estate',
  // storageBucket: 'mern-estate.appspot.com',
  // messagingSenderId: '1078482850952',
  // appId: '1:1078482850952:web:28f19139ab77246602fb3d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
