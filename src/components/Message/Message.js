import React from 'react';
import { auth } from '../../firebase';
import { MessageWrapper, Msg, Image, InnerWrapper } from './MessageStyles';

const Message = ({ message }) => {
  const sender = message.uid === auth.currentUser.uid && 'sender';

  return (
    <MessageWrapper sender={sender}>
      <InnerWrapper sender={sender}>
        <Image src={message.photoUrl} />
        <Msg sender={sender}>{message.text}</Msg>
      </InnerWrapper>
    </MessageWrapper>
  );
};

export default Message;
