import React from 'react';
import styled from 'styled-components';

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;

export const MainWrapper = styled.main``;
