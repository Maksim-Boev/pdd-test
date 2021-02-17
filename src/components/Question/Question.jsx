import React, { useState } from 'react';
import { QuestionUl, DivStyle, QuestionStyle } from './StyledComponents';
import AnswerList from '../AnswerList';

const Question = ({ data, userResponse, updateNumberQue }) => {
  const [numQuestion, setNumQuestion] = useState(0);
  updateNumberQue(numQuestion);
  // eslint-disable-next-line camelcase
  const questions = data.map(({ que_title }) => que_title);
  const question = questions[numQuestion];

  // eslint-disable-next-line no-shadow
  const urlImg = data.map(({ urlImg }) => urlImg);
  const img = urlImg[numQuestion];

  const onIncNumQuestion = () => {
    setNumQuestion(numQuestion + 1);
  };

  const show = numQuestion < data.length;

  return (
    <>
      <QuestionUl>
        <DivStyle>
          {img !== undefined && img.length !== 0 && (
            <img style={{ width: '100%' }} src={img} alt="img" />
          )}
          <QuestionStyle>{question}</QuestionStyle>
        </DivStyle>
      </QuestionUl>
      {show && (
        <AnswerList
          data={data}
          onIncNumQuestion={onIncNumQuestion}
          numQuestion={numQuestion}
          userResponse={userResponse}
        />
      )}
    </>
  );
};

export default Question;
