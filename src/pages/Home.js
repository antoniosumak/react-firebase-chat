import React, { useState, useRef } from 'react';
import Section from '../components/Section/Section';
import MessageContainer from '../components/MessageContainer/MessageContainer';
import Message from '../components/Message/Message';
import {
  Button,
  Input,
  InputContainer,
  Container,
  UsersDiv,
} from '../lib/styles/generalStyles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Image } from '../components/Message/MessageStyles';

const Home = () => {
  const [user] = useAuthState(auth);
  const [inputValue, setInputValue] = useState('');
  const scrollView = useRef();

  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const signOut = () => {
    auth.currentUser && auth.signOut();
  };

  const messageRef = db.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const sendMessage = async (e) => {
    e.preventDefault();

    await messageRef.add({
      text: inputValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: auth.currentUser.uid,
      photoUrl: auth.currentUser.photoURL,
      user: auth.currentUser.displayName,
    });

    setInputValue('');
    scrollView.current.scrollIntoView({ behavior: 'smooth' });
  };

  const arrayOfUsers =
    auth.currentUser &&
    messages &&
    messages.map((value) => {
      return {
        userName: value.user,
        image: value.photoUrl,
        userID: auth.currentUser.uid,
      };
    });

  const uniqueUsers =
    arrayOfUsers &&
    arrayOfUsers.filter(
      (v, i, a) => a.findIndex((t) => t.userName === v.userName) === i
    );

  return (
    <Section>
      {user ? (
        <Container>
          <UsersDiv>
            {uniqueUsers &&
              uniqueUsers.map((value, index) => (
                <Image key={index} src={value.image} />
              ))}
          </UsersDiv>
          <Button onClick={signOut}>Logout</Button>
          <MessageContainer>
            {messages &&
              messages.map((value) => (
                <Message key={value.id} message={value} />
              ))}
            <span ref={scrollView}></span>
          </MessageContainer>
          <InputContainer onSubmit={sendMessage}>
            <Input
              value={inputValue}
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </InputContainer>
        </Container>
      ) : (
        <Button onClick={signInGoogle}>Login</Button>
      )}
    </Section>
  );
};

export default Home;
