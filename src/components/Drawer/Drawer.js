import React, { useState, useEffect } from 'react';
import MenuToggle from '../MenuToggle';
import Backdrop from '../Backdrop';
import TicketItem from '../TicketItem';
import UlStyle from './StyledComponents';

const Drawer = ({ updateTicket, dataLength }) => {
  const [ticket, setTicket] = useState(null);
  const [idActive, setIdActive] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    updateTicket(ticket);
  }, [ticket]);

  const onToggle = () => {
    setToggle(!toggle);
  };

  // eslint-disable-next-line no-shadow
  const isActive = (idActive = null, index) => {
    return idActive === index;
  };

  // eslint-disable-next-line no-shadow
  const link = dataLength.map((link, index) => {
    const id = index;
    const onActive = () => {
      setIdActive(index);
    };
    const onUpdate = () => {
      setTicket(index);
    };
    return (
      <TicketItem
        active={isActive(idActive, index)}
        key={id}
        index={index}
        onUpdate={onUpdate}
        onActive={onActive}
      />
    );
  });

  return (
    <>
      <div>
        <MenuToggle onToggle={onToggle} isOpen={toggle} />
        <UlStyle open={toggle}>{link}</UlStyle>
      </div>
      {toggle && <Backdrop onClose={onToggle} />}
    </>
  );
};

export default Drawer;
