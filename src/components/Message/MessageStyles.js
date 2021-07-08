import styled from 'styled-components';
import { colors } from '../../lib/styles/theme';

export const MessageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.sender === 'sender' ? 'flex-end' : 'flex-start'};
`;

export const InnerWrapper = styled.div`
  padding: 16px 0px;
  display: flex;
  align-items: center;
  flex-direction: ${(props) =>
    props.sender === 'sender' ? 'row-reverse' : 'row'};
`;

export const Msg = styled.p`
  font: 16px;
  line-height: 160%;
  padding: 8px 24px;
  margin: 0px 12px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.sender === 'sender' ? `${colors.orange}` : `${colors.yellow}`};
  color: ${colors.darkBlue};
`;

export const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
