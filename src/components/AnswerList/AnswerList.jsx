import React, { useState } from 'react';
import Answer from '../Answer';

const AnswerList = ({ data, onIncNumQuestion, numQuestion, userResponse }) => {
  const dataWithCount = data.length !== 0 && data[numQuestion];
  // eslint-disable-next-line camelcase
  const { que_answers } = dataWithCount;

  const [noPressing, setNoPressing] = useState(false);

  const onPressing = (value) => {
    setNoPressing(value);
  };

  const answers =
    // eslint-disable-next-line camelcase
    que_answers &&
    que_answers.map(({ answer, id }) => {
      return (
        <Answer
          key={id}
          id={id}
          answer={answer}
          data={dataWithCount}
          lengthQuiz={data.length}
          onPressing={onPressing}
          pressing={noPressing}
          onIncNumQuestion={onIncNumQuestion}
          numQuestion={numQuestion}
          userResponse={userResponse}
        />
      );
    });

  return <>{answers}</>;
};

export default AnswerList;
