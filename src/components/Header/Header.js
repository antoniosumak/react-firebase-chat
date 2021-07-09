import React from 'react';
import { HeaderWrapper, HeaderInner } from './HeaderStyles';
import { Button } from '../../lib/styles/generalStyles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut, auth } from '../../firebase';

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <HeaderWrapper>
      <HeaderInner>
        {user && <Button onClick={signOut}>Logout</Button>}
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
