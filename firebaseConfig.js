import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; // Nếu bạn sử dụng Firebase Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyCKAHidlVuytWnJayS9TDhuo1SiWR730w4",
  authDomain: "healthy-12f34.firebaseapp.com",
  databaseURL: "https://healthy-12f34-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "healthy-12f34",
  storageBucket: "healthy-12f34.firebasestorage.app",
  messagingSenderId: "478535242713",
  appId: "1:478535242713:web:6f05bb5d4d1c4b32bebfc8",
  measurementId: "G-6PSBVWFBS1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
