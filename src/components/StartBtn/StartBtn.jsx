import React from 'react';
import { StartButton } from './StyledComponents';

const StartBtn = ({ disabled = false, onClick }) => (
  <StartButton onClick={onClick} disabled={disabled}>
    Start test
  </StartButton>
);

export default StartBtn;
