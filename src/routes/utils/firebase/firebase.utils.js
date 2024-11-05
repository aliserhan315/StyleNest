
import { initializeApp} from 'firebase/app'
import 
{getAuth ,
     signInWithRedirect,
     signInWithPopup,
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth" 
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,


} from 'firebase/firestore';
import { useCallback } from 'react';



const firebaseConfig = {
  apiKey: "AIzaSyAXdi-Ijs_w3KYMG9G-2NaUWscsI1bLtYE",
  authDomain: "elsa-clothing.firebaseapp.com",
  projectId: "elsa-clothing",
  storageBucket: "elsa-clothing.appspot.com",
  messagingSenderId: "631829553330",
  appId: "1:631829553330:web:a083e5a947e19f170a29ab"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser =async()=> await signOut(auth);

export const onAuthStateChangedListener =(Callback)=>{


  onAuthStateChanged(auth,Callback);
}

