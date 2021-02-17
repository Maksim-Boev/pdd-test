import React, { useState } from 'react';
import LiStyle from './StyledComponent';

const Answer = ({
  id,
  answer,
  data,
  numQuestion,
  onIncNumQuestion,
  onPressing,
  pressing,
  userResponse,
  lengthQuiz,
}) => {
  const [markerAnswer, setMarkerAnswer] = useState('');

  // const rightAns = data.rightAnswer === id;
  // const timeoutResetMarkerAnswer = (t) => {
  //   setTimeout(() => {
  //     onPressing(false);
  //     setMarkerAnswer('');
  //     // eslint-disable-next-line no-unused-expressions
  //     if (numQuestion <= lengthQuiz) {
  //       onIncNumQuestion();
  //     }
  //   }, t);
  // };

  // const onAnswerClick = () => {
  //   onPressing(true);
  //   if (pressing === false) {
  //     if (rightAns) {
  //       setMarkerAnswer(true);
  //       userResponse(true);
  //
  //       timeoutResetMarkerAnswer(1000);
  //       clearTimeout(timeoutResetMarkerAnswer);
  //     } else {
  //       setMarkerAnswer(false);
  //       userResponse(false);
  //       timeoutResetMarkerAnswer(1000);
  //       clearTimeout(timeoutResetMarkerAnswer);
  //     }
  //   }
  // };

  return (
    <>
      <LiStyle trueAnswer={markerAnswer}>{data.answer}</LiStyle>
    </>
  );
};

export default Answer;
