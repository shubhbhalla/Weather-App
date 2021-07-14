import { Button } from '@material-ui/core';
import SearchField from './SearchField';

import { useContext } from 'react';

import { MainContext } from './MainContext';

const Header = () => {
  const { signOut, email } = useContext(MainContext);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        color: 'red',
      }}
    >
      <SearchField />
      <Button onClick={signOut}>Sign Out, {email}</Button>
    </div>
  );
};

export default Header;
