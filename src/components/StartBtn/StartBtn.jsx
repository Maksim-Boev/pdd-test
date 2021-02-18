import React from 'react';
import StartBtnStyle from './StyledComponents';

const StartBtn = ({ start = false, onClick }) => {
  return (
    <StartBtnStyle onClick={onClick}>
      {start ? 'End test' : 'Start test'}
    </StartBtnStyle>
  );
};

export default StartBtn;
