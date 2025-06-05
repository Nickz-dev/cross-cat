import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;


export default GlobalStyles
