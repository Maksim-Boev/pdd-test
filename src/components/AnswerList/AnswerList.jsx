import React, { useState } from 'react';
import Answer from '../Answer';

const AnswerList = ({ data, onIncNumQuestion, numQuestion, userResponse }) => {
  // const dataWithCount = data.length !== 0 && data[numQuestion];
  // // eslint-disable-next-line camelcase
  // const { que_answers } = dataWithCount;
  //
  // const [noPressing, setNoPressing] = useState(false);
  //
  // const onPressing = (value) => {
  //   setNoPressing(value);
  // };

  return data.que_answers.map((answerData) => {
    return (
      <Answer
        key={answerData.id}
        // id={id}
        // answer={answer}
        data={answerData}
        // lengthQuiz={data.length}
        // onPressing={onPressing}
        // pressing={noPressing}
        // onIncNumQuestion={onIncNumQuestion}
        // numQuestion={numQuestion}
        // userResponse={userResponse}
      />
    );
  });
};

export default AnswerList;
