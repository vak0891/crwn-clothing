import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAv3F-sLMn8v58Uth4pewuj9v-b_Ly5Wp0",
    authDomain: "crwn-db-7409f.firebaseapp.com",
    databaseURL: "https://crwn-db-7409f.firebaseio.com",
    projectId: "crwn-db-7409f",
    storageBucket: "crwn-db-7409f.appspot.com",
    messagingSenderId: "395670354981",
    appId: "1:395670354981:web:682eb984a63a628cc693cc",
    measurementId: "G-ZPF59BPG86"
  };

  export const createUserProfileDocument =  async (userAuth, additionalData) => {
    if(!userAuth){
      return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const {displayName, email } = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('Error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({    
    prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;