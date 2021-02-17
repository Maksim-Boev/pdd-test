import React, { useState, useEffect } from 'react';

import { IconStyle, ListStyle } from './StyledComponents';

const QuizResults = ({ result }) => {
  return (
    <div>
      {/*{wrongAns > 2 ? (*/}
      {/*  <h1>Вы не прошли тест</h1>*/}
      {/*) : (*/}
      {/*  <h1>Поздравляем, вы прошли тест</h1>*/}
      {/*)}*/}
      <br />
      <ul style={{ padding: '0' }}>
        {result.map(({ questionId, answerId, rightAnswer, answerText }) => (
          <ListStyle key={questionId}>
            {questionId}. {answerText}
            <IconStyle
              result={+result}
              className={result ? 'fa fa-check' : 'fa fa-times'}
            />
          </ListStyle>
        ))}
      </ul>
      <p>{/*Правильно {counterTrueQuestion()} из {resultQuestion.length}*/}</p>
      {/* eslint-disable-next-line react/button-has-type */}
      {/*<button onClick={resetResult}>Повторить</button>*/}
    </div>
  );
};

export default QuizResults;
