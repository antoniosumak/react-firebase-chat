import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAde0nD9HuJDnfWvQKfY5h0HcfkN_TcRsM',
  authDomain: 'fir-chat-d7414.firebaseapp.com',
  projectId: 'fir-chat-d7414',
  storageBucket: 'fir-chat-d7414.appspot.com',
  messagingSenderId: '735975573068',
  appId: '1:735975573068:web:a57e30439df6b281bf96e9',
});

export const db = firebase.firestore();

export const auth = firebase.auth();

export default app;
