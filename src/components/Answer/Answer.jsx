import React from 'react';
import AnswerItem from './StyledComponent';

const Answer = ({ data, onSetUserAnswer }) => (
  <AnswerItem onClick={onSetUserAnswer}>{data.answer}</AnswerItem>
);
export default Answer;
