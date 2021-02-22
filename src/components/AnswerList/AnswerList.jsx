import React, { useState } from 'react';
import Answer from '../Answer';

const AnswerList = ({ data, nextQuestion, userResponse }) => {
  const [noPressing, setNoPressing] = useState(false);

  const onPressing = (value) => {
    setNoPressing(value);
  };

  const answers =
    data.que_answers &&
    data.que_answers.map(({ answer, id }) => {
      return (
        <Answer
          key={id}
          id={id}
          answer={answer}
          rightAnswer={data.rightAnswer}
          onPressing={onPressing}
          pressing={noPressing}
          nextQuestion={nextQuestion}
          userResponse={userResponse}
        />
      );
    });

  return <>{answers}</>;
};

export default AnswerList;
