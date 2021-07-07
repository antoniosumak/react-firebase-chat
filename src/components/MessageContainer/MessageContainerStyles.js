import styled from 'styled-components';
import { breakpoints } from '../../lib/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  max-height: 500px;
  overflow-y: scroll;

  @media screen and (${breakpoints.tablet}) {
    max-width: 500px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 800px;
    margin: 0 auto;
  }
`;
