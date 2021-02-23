import React from 'react';
import { Wrapper, TextQuestion, Img } from './StyledComponents';
import AnswerList from '../AnswerList';

const Question = ({ data, userAnswer, nextQuestion }) => {
  return (
    <>
      <Wrapper>
        {!!data.urlImg && <Img src={data.urlImg} alt="img" />}
        <TextQuestion>{data.que_title}</TextQuestion>
      </Wrapper>

      <AnswerList
        data={data}
        nextQuestion={nextQuestion}
        userAnswer={userAnswer}
      />
    </>
  );
};

export default Question;
