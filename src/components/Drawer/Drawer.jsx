import React, { useState, useEffect } from 'react';
import TicketItem from '../TicketItem';
import { TicketList, Backdrop, MenuToggle } from './StyledComponents';

const Drawer = ({ updateTicketNumber, ticketList }) => {
  const [ticketNumber, setTicketNumber] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    updateTicketNumber(ticketNumber);
  }, [ticketNumber]);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const isActive = (id = null, index) => {
    return id === index;
  };

  const link = ticketList.map((index) => {
    const onClick = () => {
      onToggle();
      setTicketNumber(index);
    };
    return (
      <TicketItem
        active={isActive(ticketNumber, index)}
        key={+index}
        index={index}
        onClick={onClick}
      />
    );
  });

  return (
    <>
      <div>
        <MenuToggle
          open={toggle}
          onClick={onToggle}
          className={toggle ? 'fa fa-times' : 'fa fa-bars'}
        />
        <TicketList open={toggle}>{link}</TicketList>
      </div>
      {toggle && <Backdrop onClick={onToggle} />}
    </>
  );
};

export default Drawer;
