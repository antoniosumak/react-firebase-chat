import styled from 'styled-components';
import { breakpoints } from '../../lib/styles/theme';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 15px;
  @media screen and (${breakpoints.tablet}) {
    padding: 0 40px;
  }
  @media screen and (${breakpoints.desktop}) {
    max-width: 944px;
    margin: 0 auto;
  }
  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1224px;
  }
`;

export const HeaderInner = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
`;
