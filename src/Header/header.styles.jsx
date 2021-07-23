import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    justify-items: center;
  }
`;

export const ChipContainer = styled.div`
  padding: 0 20px 20px 20px;
  @media screen and (max-width: 800px) {
    place-self: center;
    grid-column: 1/2;
    grid-row: 3/4;
  }
`;

export const SearchFieldContainer = styled.div`
  @media screen and (max-width: 800px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

export const ButtonContainer = styled.div`
  @media screen and (max-width: 800px) {
    place-self: center end;
    padding: 20px 20px 0 0;
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;
