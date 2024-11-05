import React from 'react';
import { HeaderContainer } from './Header.styles';
import Logo from '../Common/Logo';


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;