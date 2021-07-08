import React from 'react';
import { auth } from '../../firebase';
import { MessageWrapper, Msg, Image, InnerWrapper } from './MessageStyles';
import { deleteMessage } from '../../firebase';

const Message = ({ message }) => {
  const sender = message.uid === auth.currentUser.uid && 'sender';

  return (
    <MessageWrapper sender={sender}>
      <InnerWrapper sender={sender}>
        <Image src={message.photoUrl} />
        <Msg
          sender={sender}
          onClick={() => deleteMessage(message.id, message.uid)}
        >
          {message.text}
        </Msg>
      </InnerWrapper>
    </MessageWrapper>
  );
};

export default Message;
