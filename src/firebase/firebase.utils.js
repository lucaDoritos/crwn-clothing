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

const firebaseApp = firebase.initializeApp(config)

export const auth = firebaseApp.auth()
export const firestore = firebaseApp.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;