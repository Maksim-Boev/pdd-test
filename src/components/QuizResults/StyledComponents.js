import styled from 'styled-components';

export const ResultItem = styled.li`
  list-style: none;
  padding-bottom: 10px;
`;
export const ResultIcon = styled.i`
  margin-left: 10px;
  ${({ result }) => {
    return result ? 'color: green' : 'color: red';
  }}
`;

export const ListResults = styled.ul`
  padding: '0';
`;
