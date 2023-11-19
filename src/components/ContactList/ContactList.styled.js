import styled from 'styled-components';

export const Item = styled('li')`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const BtnDelete = styled('button')`
  background: rgb(20% 10% 50%);
  border-radius: 10px;
  border: rgb(255 122 127 / 0.2);
  box-shadow: 1px 1px #e96874;
  color: white;
  height: 30px;
  &:hover,
  :focus {
    color: black;
    background-color: yellow;
  }
`;

export const StylePar = styled('p')`
  width: 200px;
  height: 25px;
  border-radius: 10px;
  color: white;
  text-align: center;
  margin: auto;
  background-color: rgb(30% 10% 50%);
`;

export const StyledUl = styled.ul`
  margin: auto;
  max-width: 600px;
  margin-top: 20px;
  padding-bottom: 40px;
`;
