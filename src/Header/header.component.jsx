import { Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

import SearchField from '../SearchField';
import { MainContext } from '../MainContext';
import {
  ButtonContainer,
  ChipContainer,
  HeaderContainer,
  SearchFieldContainer,
} from './header.styles';

import { useContext } from 'react';

const Header = () => {
  const { signOut, email } = useContext(MainContext);
  return (
    <HeaderContainer>
      <ChipContainer>
        <Chip
          label="Click on the weather cards to display graph!"
          color="primary"
          variant="outlined"
        />
      </ChipContainer>
      <SearchFieldContainer>
        <SearchField />
      </SearchFieldContainer>
      <ButtonContainer>
        <Button onClick={signOut}>Sign Out, {email}</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
