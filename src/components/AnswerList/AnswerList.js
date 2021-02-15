import React, { useState } from 'react';
import { connect } from 'react-redux';
import Answer from '../Answer';

const AnswerList = ({ count, data }) => {
  const dataWithCount = data.length !== 0 && data[count];

  const question = dataWithCount.que_title;
  const { idQuestion } = dataWithCount;
  const { rightAnswer } = dataWithCount;
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
          id={id}
          idQuestion={idQuestion}
          key={id}
          lengthQuiz={data.length}
          question={question}
          answer={answer}
          rightAnswer={rightAnswer}
          onPressing={onPressing}
          pressing={noPressing}
        />
      );
    });

  return <>{answers}</>;
};

const mapStateToProps = ({ count, resultQuestion }) => {
  return {
    count,
    resultQuestion,
  };
};

export default connect(mapStateToProps)(AnswerList);
