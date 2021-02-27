import React from 'react';
import AnswerItem from './StyledComponent';

const Answer = ({ data, onAnswerClick }) => {
  return <AnswerItem onClick={onAnswerClick}>{data.answer}</AnswerItem>;
};

export default Answer;
