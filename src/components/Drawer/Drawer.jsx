import React, { useState, useEffect } from 'react';
import {
  TicketList,
  Backdrop,
  MenuToggle,
  TicketLiStyle,
} from './StyledComponents';

const Drawer = ({ updateTicketNumber, ticketList }) => {
  const [ticketNumber, setTicketNumber] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    updateTicketNumber(ticketNumber);
  }, [ticketNumber]);

  const link = ticketList.map((index) => {
    return (
      <TicketLiStyle
        key={index.toString()}
        ticketMarker={ticketNumber === index}
        onClick={() => {
          setToggle(!toggle);
          setTicketNumber(index);
        }}
      >
        Ticket {index + 1}
      </TicketLiStyle>
    );
  });

  return (
    <>
      <div>
        <MenuToggle
          open={toggle}
          onClick={() => setToggle(!toggle)}
          className={toggle ? 'fa fa-times' : 'fa fa-bars'}
        />
        <TicketList open={toggle}>{link}</TicketList>
      </div>
      {toggle && <Backdrop onClick={() => setToggle(!toggle)} />}
    </>
  );
};

export default Drawer;
