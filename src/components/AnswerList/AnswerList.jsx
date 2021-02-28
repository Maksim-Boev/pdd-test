import React from 'react';
import Answer from '../Answer';

const AnswerList = ({ data, nextQuestion, userAnswer }) => {
  const answers =
    data.que_answers &&
    data.que_answers.map((item, index) => {
      const onSetUserAnswer = () => {
        userAnswer(data.rightAnswer === item.id);
        nextQuestion();
      };
      return (
        <Answer
          key={index.toString()}
          data={item}
          onSetUserAnswer={onSetUserAnswer}
        />
      );
    });

  return <>{answers}</>;
};

export default AnswerList;
