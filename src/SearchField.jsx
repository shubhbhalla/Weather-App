import { Button, TextField } from '@material-ui/core';
import { useContext, useState } from 'react';
import { MainContext } from './MainContext';

import styled from 'styled-components';

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const SearchField = () => {
  const { getCityData } = useContext(MainContext);

  const [input, setInput] = useState('');

  return (
    <SearchBoxContainer>
      <TextField
        required
        value={input}
        onChange={(e) => setInput(e.target.value)}
        label="Enter City Name"
      />
      <Button
        onClick={() => {
          setInput('');
          getCityData(input);
        }}
        style={{ marginTop: '20px' }}
        color="primary"
      >
        Check
      </Button>
    </SearchBoxContainer>
  );
};
export default SearchField;
