import styled from 'styled-components';
export const StyledHedar = styled.div`
  display: flex;
`;

export const StyledSearchBar = styled.input`
border: none;
  outline: none;
  flex: 1;
  font-size: 16px;
  font-style: italic;
  background: transparent;
  color: #eedadaff;
  padding: 8px;

  &::placeholder {
    color: #aaa;
  }`;

  export const StyledAppContainer = styled.div` 
   min-height: 100vh;
  display: flex;
  //justify-content: center;
  //align-items: center;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #ffffff;
  }
`;