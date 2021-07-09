import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyCCi5tP3UfnGJrclAvswF3CKovkYE7AbKc',
  authDomain: 'fir-react-chat-944b3.firebaseapp.com',
  projectId: 'fir-react-chat-944b3',
  storageBucket: 'fir-react-chat-944b3.appspot.com',
  messagingSenderId: '1099381443402',
  appId: '1:1099381443402:web:86eb97f681b57f4b964fb3',
});

export const db = firebase.firestore();

export const deleteMessage = (id, userID) => {
  if (auth.currentUser !== null) {
    if (auth.currentUser.uid === userID) {
      db.collection('messages').doc(id).delete();
    } else {
      alert("You can't delete others messages!");
    }
  }
};

export const signOut = () => {
  auth.currentUser && auth.signOut();
};

export const auth = firebase.auth();
