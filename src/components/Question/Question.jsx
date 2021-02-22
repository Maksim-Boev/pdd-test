import React, { useState } from 'react';
import { QuestionUl, DivStyle, QuestionStyle } from './StyledComponents';
import AnswerList from '../AnswerList';

const Question = ({ data, userResponse, updateNumberQue }) => {
  const [numberQuestion, setNumberQuestion] = useState(0);
  updateNumberQue(numberQuestion);
  // eslint-disable-next-line camelcase
  const questions = data.map(({ que_title }) => que_title);

  // eslint-disable-next-line no-shadow
  const urlImg = data.map(({ urlImg }) => urlImg);
  const img = urlImg[numberQuestion];

  const onIncNumQuestion = () => {
    setNumberQuestion(numberQuestion + 1);
  };

  const show = numberQuestion < data.length;

  return (
    <>
      <QuestionUl>
        <DivStyle>
          {img !== undefined && img.length !== 0 && (
            <img style={{ width: '100%' }} src={img} alt="img" />
          )}
          <QuestionStyle>{questions[numberQuestion]}</QuestionStyle>
        </DivStyle>
      </QuestionUl>
      {show && (
        <AnswerList
          data={data}
          onIncNumQuestion={onIncNumQuestion}
          numQuestion={numberQuestion}
          userResponse={userResponse}
        />
      )}
    </>
  );
};

export default Question;
