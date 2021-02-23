import React, { useState, useEffect } from 'react';

import { ResultItem, ResultIcon, ListResults } from './StyledComponents';

const QuizResults = ({ resultQuestion, resetResult }) => {
  const allCorrectAnswerToQuestions = () => {
    let correctAnswer = 0;
    resultQuestion.forEach((item) => {
      if (item.result) {
        correctAnswer += 1;
      }
    });
    return correctAnswer;
  };

  const [wrongAnswers, setWrongAnswers] = useState(0);

  useEffect(() => {
    resultQuestion.forEach(({ result }) => {
      // eslint-disable-next-line no-unused-expressions
      result === false && setWrongAnswers((wrongAnswer) => wrongAnswer + 1);
    });
  }, []);

  const resultItem = resultQuestion.map(({ id, question, result }) => {
    return (
      <ResultItem key={id.toString()}>
        {id}. {question}
        <ResultIcon
          colorIcon={result}
          className={result ? 'fa fa-check' : 'fa fa-times'}
        />
      </ResultItem>
    );
  });

  return (
    <div>
      {wrongAnswers > 2 ? (
        <h1>Вы не прошли тест</h1>
      ) : (
        <h1>Поздравляем, вы прошли тест</h1>
      )}
      <br />
      <ListResults>{resultItem}</ListResults>
      <p>
        Правильно {allCorrectAnswerToQuestions()} из {resultQuestion.length}
      </p>

      <button type="button" onClick={resetResult}>
        Повторить
      </button>
    </div>
  );
};

export default QuizResults;
