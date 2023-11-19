import styled from 'styled-components';

export const Container = styled('div')`
  text-align: center;
  margin: auto;
  max-width: 800px;
  background: linear-gradient(#e96874, #6e3663, #95539e);
  border-radius: 2px;
  box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.3);
`;

export const SearchInput = styled.input`
  width: 200px;
  height: 20px;
  margin-bottom: 5px;
  border-radius: 10px;
  border-color: black;
  padding-left: 20px;
  &::placeholder {
    font-size: 12px;
    color: black;
  }
`;
export const TitleH1 = styled.h1`
  text-shadow: #fc0 1px 0 10px;
`;
export const TitleH2 = styled.h2`
  text-shadow: #fc0 1px 0 10px;
`;
export const TitleH3 = styled.h3`
  text-shadow: #fc0 1px 0 10px;
`;
