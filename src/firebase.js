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

export const auth = firebase.auth();
