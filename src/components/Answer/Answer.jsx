import React, { useState } from 'react';
import AnswerItem from './StyledComponent';

const Answer = ({
  id,
  answer,
  rightAnswer,
  nextQuestion,
  onPressing,
  pressing,
  userResponse,
}) => {
  const [markerAnswer, setMarkerAnswer] = useState('');

  const correctAnswer = rightAnswer === id;

  const timeoutResetMarkerAnswer = (t) => {
    setTimeout(() => {
      onPressing(false);
      setMarkerAnswer('');
      nextQuestion();
    }, t);
  };

  const onAnswerClick = () => {
    onPressing(true);
    if (pressing === false) {
      if (correctAnswer) {
        setMarkerAnswer(true);
        userResponse(true);
        timeoutResetMarkerAnswer(700);
        clearTimeout(timeoutResetMarkerAnswer);
      } else {
        setMarkerAnswer(false);
        userResponse(false);
        timeoutResetMarkerAnswer(700);
        clearTimeout(timeoutResetMarkerAnswer);
      }
    }
  };

  return (
    <>
      <AnswerItem trueAnswer={markerAnswer} onClick={onAnswerClick}>
        {answer}
      </AnswerItem>
    </>
  );
};

export default Answer;
