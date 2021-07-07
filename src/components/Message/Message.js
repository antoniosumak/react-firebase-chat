import React from 'react';
import { MessageWrapper, Msg, Image, InnerWrapper } from './MessageStyles';

const Message = ({ message, image, sender }) => {
  return (
    <MessageWrapper sender={sender}>
      <InnerWrapper sender={sender}>
        <Image src={image} />
        <Msg>{message}</Msg>
      </InnerWrapper>
    </MessageWrapper>
  );
};

export default Message;
