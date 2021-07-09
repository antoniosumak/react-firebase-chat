import styled from 'styled-components';
import { colors, breakpoints } from './theme';

export const Button = styled.button`
  padding: 16px 32px;
  background-color: ${colors.yellow};
  border: 1px solid ${colors.yellow};
  color: ${colors.white};
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.white};
    cursor: pointer;
    color: ${colors.yellow};
    outline: none;
  }
`;

export const InputContainer = styled.form`
  display: flex;
`;

export const Input = styled.input`
  position: relative;

  flex: 1;
`;

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.blue};
  box-shadow: rgba(180, 180, 180, 0.2) 0px 7px 29px 0px;
  @media screen and (${breakpoints.tablet}) {
    max-width: 500px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const UsersDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;
