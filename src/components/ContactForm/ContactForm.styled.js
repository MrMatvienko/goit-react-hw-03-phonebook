import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 300px;
`;

export const StyledInput = styled.input`
  margin-bottom: 5px;
  border-radius: 10px;
  border-color: black;
  padding-left: 20px;
  height: 20px;
  &::placeholder {
    font-size: 12px;
    color: black;
  }
`;

export const StyledBtn = styled.button`
  border-radius: 10px;
  background: rgb(20% 10% 50%);
  color: white;
  height: 25px;
  border: none;
  &:hover,
  :focus {
    color: black;
    background-color: yellow;
  }
`;
