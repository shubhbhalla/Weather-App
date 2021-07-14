import { Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

import SearchField from './SearchField';
import { MainContext } from './MainContext';

import { useContext } from 'react';

const Header = () => {
  const { signOut, email } = useContext(MainContext);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        color: 'red',
        alignItems: 'center',
      }}
    >
      <Chip
        label="Click on the weather cards to display graph!"
        color="primary"
        variant="outlined"
      />
      <SearchField />
      <Button onClick={signOut}>Sign Out, {email}</Button>
    </div>
  );
};

export default Header;
