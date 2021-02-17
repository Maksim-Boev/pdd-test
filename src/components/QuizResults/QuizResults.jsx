import React from 'react';
import { Button, IconStyle, ListStyle, Report } from './StyledComponents';

const QuizResults = ({ results }) => {
  const getRightAnswersCount = () => {
    let rightAnswersCount = 0;
    results.forEach(
      (res) => res.answerId === res.rightAnswer && rightAnswersCount++
    );
    return rightAnswersCount;
  };

  const getFailedAnswersCount = () => results.length - getRightAnswersCount();

  const checkAnswer = (ansId, rightAnsId) => ansId === rightAnsId;

  const resetResult = () => window.location.reload();

  return (
    <div>
      {getFailedAnswersCount() > 2 ? (
        <h1>
          Вы не прошли тест (Процент ошибок:{' '}
          {(getFailedAnswersCount() / results.length) * 100}%)
        </h1>
      ) : (
        <h1>
          Поздравляем, вы прошли тест (Процент ошибок:{' '}
          {(getFailedAnswersCount() / results.length) * 100}%)
        </h1>
      )}
      <br />
      <Report>
        {results
          .sort((a, b) => a.questionId - b.questionId) // Сортировка массива по айдишникам
          .map(({ questionId, answerId, rightAnswer, answerText }) => (
            <ListStyle key={questionId}>
              {questionId}. {answerText}
              <IconStyle
                result={checkAnswer(answerId, rightAnswer)}
                className={
                  checkAnswer(answerId, rightAnswer)
                    ? 'fa fa-check'
                    : 'fa fa-times'
                }
              />
            </ListStyle>
          ))}
      </Report>
      <h1>
        Правильно: {getRightAnswersCount()} из {results.length}
      </h1>
      <Button onClick={resetResult}>Повторить</Button>
    </div>
  );
};

export default QuizResults;
