import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';
import LiStyle from './StyledComponent';

const Answer = ({
  question,
  idQuestion,
  answer,
  id,
  rightAnswer,
  inc,
  count,
  lengthQuiz,
  correctAnswer,
  wrongAnswer,
  onPressing,
  pressing,
}) => {
  const [markerAnswer, setMarkerAnswer] = useState('');

  const rightAns = rightAnswer === id;
  const timeoutResetMarkerAnswer = (t) => {
    setTimeout(() => {
      onPressing(false);
      setMarkerAnswer('');
      // eslint-disable-next-line no-unused-expressions
      count <= lengthQuiz && inc();
    }, t);
  };

  const QuestionFromResult = {
    idQuestion,
    question,
  };

  const onAnswerClick = () => {
    onPressing(true);
    if (pressing === false) {
      if (rightAns) {
        setMarkerAnswer(true);
        correctAnswer(QuestionFromResult);
        timeoutResetMarkerAnswer(1000);
        clearTimeout(timeoutResetMarkerAnswer);
      } else {
        setMarkerAnswer(false);
        wrongAnswer(QuestionFromResult);
        timeoutResetMarkerAnswer(1000);
        clearTimeout(timeoutResetMarkerAnswer);
      }
    }
  };

  return (
    <>
      <LiStyle trueAnswer={markerAnswer} onClick={onAnswerClick}>
        {answer}
      </LiStyle>
    </>
  );
};

const mapStateToProps = ({ count }) => {
  return {
    count,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { inc, correctAnswer, wrongAnswer } = bindActionCreators(
    actions,
    dispatch
  );
  return {
    inc,
    correctAnswer,
    wrongAnswer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
