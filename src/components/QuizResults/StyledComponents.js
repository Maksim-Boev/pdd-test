import styled from 'styled-components';

export const ListStyle = styled.li`
  list-style: none;
  padding-bottom: 10px;
`;
export const IconStyle = styled.i`
  margin-left: 10px;
  ${({ result }) => (result ? 'color: green' : 'color: red')}
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 15px;
`;

export const Report = styled.ul`
  padding: 0;
`;
