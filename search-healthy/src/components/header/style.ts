import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  padding: 5px 10px 5px 15px;
  bottom: 0;
  justify-content: space-between;
  h1 {
    padding-left: 20px;
    color: black;
    font-size: 20px;
  }
`;

export const HeaderLogo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderButtons = styled.section`
  display: flex;
  align-items: center;
  button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #151f21;
    padding: 5px;
    margin: 5px;
    color: white;
    :hover {
      color: black;
      background-color: white;
    }
  }
`;