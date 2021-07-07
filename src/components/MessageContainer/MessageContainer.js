import React from 'react';
import { Wrapper } from './MessageContainerStyles';

const MessageContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MessageContainer;
