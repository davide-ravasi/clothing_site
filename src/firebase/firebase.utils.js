import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANTb_h0FxwtKLZ7YBkUfuCBihZQAzNryA",
    authDomain: "crwn-db-610f5.firebaseapp.com",
    databaseURL: "https://crwn-db-610f5.firebaseio.com",
    projectId: "crwn-db-610f5",
    storageBucket: "",
    messagingSenderId: "333145915699",
    appId: "1:333145915699:web:bdbe365e156a7372af7e46",
    measurementId: "G-EJY5MSP4VM"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

/*
When a user signs up or signs in, that user becomes the current user of the Auth instance. 
The instance persists the user's state, 
so that refreshing the page (in a browser) or 
restarting the application doesn't lose the user's information.
When the user signs out, 
the Auth instance stops keeping a reference to the user object 
and no longer persists its state; there is no current user. 
However, the user instance continues to be completely functional: 
if you keep a reference to it, you can still access and update the user's data.
*/
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;