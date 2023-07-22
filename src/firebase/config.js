// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp8-PJVptDzQUoGTO8MFekUuaVphonLVo",
  authDomain: "cost-planner-2023.firebaseapp.com",
  projectId: "cost-planner-2023",
  storageBucket: "cost-planner-2023.appspot.com",
  messagingSenderId: "548363621748",
  appId: "1:548363621748:web:24a17fde76d566f3148821",
  measurementId: "G-XLTEG47V1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);