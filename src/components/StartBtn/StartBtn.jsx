import React from 'react';
import Start from './StyledComponents';

const StartBtn = ({ start = false, onClick }) => (
  <Start onClick={onClick}>{start ? 'End test' : 'Start test'}</Start>
);

export default StartBtn;
