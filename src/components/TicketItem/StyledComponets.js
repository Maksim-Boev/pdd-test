import styled from 'styled-components';

const TicketLiStyle = styled.li`
  list-style: none;
  margin-top: 10px;
  margin-left: 20px;
  cursor: pointer;
  ${({ ticketMarker }) => {
    return ticketMarker ? 'color: red' : 'color: black';
  }}
`;

export default TicketLiStyle;
