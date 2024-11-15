import { firebase } from './firebaseConfig';

const handleSignUp = async (email, password) => {
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log('User signed up:', user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};
