import styled from 'styled-components';

import PreviousHistory from './PreviousHistory';
import Header from './Header/header.component';

const UserHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserHome = () => {
  return (
    <UserHomeContainer>
      <Header />
      <PreviousHistory />
    </UserHomeContainer>
  );
};

export default UserHome;
