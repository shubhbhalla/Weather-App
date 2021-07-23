import { Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';

import SearchField from './SearchField';
import { MainContext } from './MainContext';

import { useContext } from 'react';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: red;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }
`;

const Header = () => {
  const { signOut, email } = useContext(MainContext);
  return (
    <HeaderContainer>
      <Chip
        label="Click on the weather cards to display graph!"
        color="primary"
        variant="outlined"
      />
      <SearchField />
      <Button onClick={signOut}>Sign Out, {email}</Button>
    </HeaderContainer>
  );
};

export default Header;
