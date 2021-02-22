import React from 'react';
import { Wrapper, TextQuestion, Img } from './StyledComponents';
import AnswerList from '../AnswerList';

const Question = ({ data, userResponse, nextQuestion }) => {
  return (
    <>
      <Wrapper>
        {data.urlImg !== undefined && data.urlImg.length !== 0 && (
          <Img src={data.urlImg} alt="img" />
        )}
        <TextQuestion>{data.que_title}</TextQuestion>
      </Wrapper>

      <AnswerList
        data={data}
        nextQuestion={nextQuestion}
        userResponse={userResponse}
      />
    </>
  );
};

export default Question;
