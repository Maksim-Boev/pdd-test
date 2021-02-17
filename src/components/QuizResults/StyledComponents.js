import styled from 'styled-components';

export const ListStyle = styled.li`
  list-style: none;
  padding-bottom: 10px;
`;
export const IconStyle = styled.i`
  margin-left: 10px;
  ${({ result }) => {
    return result ? 'color: green' : 'color: red';
  }}
`;
