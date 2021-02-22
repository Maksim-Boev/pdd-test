import React, { useState } from 'react';
import LiStyle from './StyledComponent';

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
      <LiStyle trueAnswer={markerAnswer} onClick={onAnswerClick}>
        {answer}
      </LiStyle>
    </>
  );
};

export default Answer;
