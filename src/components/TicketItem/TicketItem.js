import React, { useState, useEffect } from 'react';
import TicketLiStyle from './StyledComponets';

const TicketItem = ({ index, onUpdate, active, onActive }) => {
  const [ticketMarker, setTicketMarker] = useState(false);

  useEffect(() => {
    setTicketMarker(active);
  }, [active]);

  const onClick = () => {
    onActive();
    onUpdate();
  };

  return (
    <TicketLiStyle ticketMarker={ticketMarker} onClick={onClick}>
      Ticket {index + 1}
    </TicketLiStyle>
  );
};

export default TicketItem;
