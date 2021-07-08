import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  height: 600px;
  overflow-y: scroll;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    background-color: ${colors.blue};
  }

  @media screen and (${breakpoints.tablet}) {
    max-width: 500px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 800px;
    margin: 0 auto;
  }
`;
