import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

interface firebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

// デプロイ前に環境変数に入れる
const firebaseConfig: firebaseConfig = {
  apiKey: "AIzaSyBWZk77px2FFVmdg6TMKwm5XP2jYxQEcvc",
  authDomain: "slouch-10804.firebaseapp.com",
  projectId: "slouch-10804",
  storageBucket: "slouch-10804.appspot.com",
  messagingSenderId: "229775672419",
  appId: "1:229775672419:web:441fe7e289abb577e7e456",
  measurementId: "G-Q462F5KLX5",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
