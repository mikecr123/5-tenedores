
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAserkmuYSyWxceHAz04oV-z3L63sOsyW8",
  authDomain: "tenedores-7f2bf.firebaseapp.com",
  projectId: "tenedores-7f2bf",
  storageBucket: "tenedores-7f2bf.appspot.com",
  messagingSenderId: "192414155350",
  appId: "1:192414155350:web:fb6dde0fb6010f3e8eb1f7",
  measurementId: "G-2WFE4XRPMB"
};


export const initFirebase = initializeApp(firebaseConfig);
