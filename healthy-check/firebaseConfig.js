import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; // Nếu bạn sử dụng Firebase Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyBqw9oLtC7mM2IcOqeTD24iwNWC7gdvVUk",
  authDomain: "healthy-check-dea2c.firebaseapp.com",
  databaseURL: "https://healthy-check-dea2c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "healthy-check-dea2c",
  storageBucket: "healthy-check-dea2c.firebasestorage.app",
  messagingSenderId: "975550808013",
  appId: "1:975550808013:web:0c97a533bf888766e20e84",
  measurementId: "G-460S4NTWE9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
