import React from 'react';
import Answer from '../Answer';

const AnswerList = ({ data, nextQuestion, userAnswer }) => {
  const answers =
    data.que_answers &&
    data.que_answers.map((item, index) => {
      return (
        <Answer
          key={index.toString()}
          data={item}
          onAnswerClick={() => {
            data.rightAnswer === item.id ? userAnswer(true) : userAnswer(false);
            nextQuestion();
          }}
        />
      );
    });

  return <>{answers}</>;
};

export default AnswerList;
