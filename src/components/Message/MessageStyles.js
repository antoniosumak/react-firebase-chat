import styled from 'styled-components';

export const MessageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.sender ? 'flex-end' : 'flex-start')};
`;

export const InnerWrapper = styled.div`
  padding: 16px 0px;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.sender ? 'row-reverse' : 'row')};
`;

export const Msg = styled.p`
  font: 16px;
  line-height: 160%;
  padding: 0px 16px;
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;
