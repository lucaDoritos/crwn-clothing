import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyADS-D_QmdQEhnkjCLDcE_mJ_pT6y4kLOY",
  authDomain: "crwn-clothing-a4c29.firebaseapp.com",
  projectId: "crwn-clothing-a4c29",
  storageBucket: "crwn-clothing-a4c29.appspot.com",
  messagingSenderId: "979330289513",
  appId: "1:979330289513:web:c4cfea9eed0a7894cb37f8",
  measurementId: "G-BZ0D1FZRVV"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

const firebaseApp = firebase.initializeApp(config)

export const auth = firebaseApp.auth()
export const firestore = firebaseApp.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;