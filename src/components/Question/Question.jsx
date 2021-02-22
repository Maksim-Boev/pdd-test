import React from 'react';
import { QuestionUl, DivStyle, QuestionStyle } from './StyledComponents';
import AnswerList from '../AnswerList';

const Question = ({ data, userResponse, nextQuestion }) => {
  return (
    <>
      <QuestionUl>
        <DivStyle>
          {data.urlImg !== undefined && data.urlImg.length !== 0 && (
            <img style={{ width: '100%' }} src={data.urlImg} alt="img" />
          )}
          <QuestionStyle>{data.que_title}</QuestionStyle>
        </DivStyle>
      </QuestionUl>
      <AnswerList
        data={data}
        nextQuestion={nextQuestion}
        userResponse={userResponse}
      />
    </>
  );
};

export default Question;
