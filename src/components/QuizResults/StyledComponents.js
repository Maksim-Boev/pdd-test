import styled from 'styled-components';

const ListStyle = styled.li`
  list-style: none;
  padding-bottom: 10px;
`;
const IconStyle = styled.i`
  margin-left: 10px;
  ${({ result }) => {
    return result ? 'color: green' : 'color: red';
  }}
`;

export { ListStyle, IconStyle };
