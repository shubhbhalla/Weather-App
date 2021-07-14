import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// const config = {
//   apiKey: process.env.GOOGLE_API_KEY,
//   authDomain: `${process.env.GOOGLE_PROJECT_ID}.firebaseapp.com`,
//   projectId: process.env.GOOGLE_PROJECT_ID,
//   storageBucket: `${process.env.GOOGLE_PROJECT_ID}.appspot.com`,
//   messagingSenderId: process.env.GOOGLE_SENDER_ID,
//   appId: process.env.GOOGLE_APP_ID,
// };

const config = {
  apiKey: 'AIzaSyCyBjo3rnKuBR6vaBlp6OPp2Lq0FmXGJCM',
  authDomain: 'weather-app-319402.firebaseapp.com',
  databaseURL: 'https://weather-app-319402-default-rtdb.firebaseio.com',
  projectId: 'weather-app-319402',
  storageBucket: 'weather-app-319402.appspot.com',
  messagingSenderId: '699875868598',
  appId: '1:699875868598:web:574769a1268e1eac1fcb17',
  measurementId: 'G-NRZTGXQ9VB',
};

export const createUserProfileDocument = (userAuth, displayName, callback) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  userRef.get().then((snapShot) => {
    if (!snapShot.exists) {
      let { email } = userAuth;
      const createdAt = new Date();

      userRef
        .set({
          email,
          createdAt,
          displayName,
          cities: [],
        })
        .then(() => {
          console.log('data saved successfully');
          if (callback) callback(userAuth.uid);
        })
        .catch((e) => console.log('error setting user-\n', e));
    }
  });

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithRedirect(provider);
};

export default firebase;
