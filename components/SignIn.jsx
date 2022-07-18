import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

const SignIn = () => {
  const SignInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    console.log('CURR:' + auth);
  };
  return (
    <button
      onClick={SignInWithGoogle}
      className="bg-blue-400 p-4 rounded-md hover:bg-blue-500 hover:scale-110 transition-all ease-in-out duration-300"
    >
      Sign In With Google
    </button>
  );
};

export default SignIn;
