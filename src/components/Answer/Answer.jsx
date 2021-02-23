import React from 'react';
import AnswerItem from './StyledComponent';

const Answer = ({ nextQuestion, userAnswer, data, rightAnswer }) => {
  const correctAnswer = rightAnswer === data.id;

  const onAnswerClick = () => {
    if (correctAnswer) {
      userAnswer(true);
      nextQuestion();
    } else {
      userAnswer(false);
      nextQuestion();
    }
  };

  return (
    <>
      <AnswerItem onClick={onAnswerClick}>{data.answer}</AnswerItem>
    </>
  );
};

export default Answer;
