import styled from 'styled-components';

export const CasinoSection = styled.div`
  padding: 160px 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000;
`;


export const CasinoCard = styled.div`
  margin: 10px auto;
  text-align: center;
  color: #ffffff;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
`;

