import React, { useState } from 'react';
import { QuestionUl, DivStyle, QuestionStyle } from './StyledComponents';
import AnswerList from '../AnswerList';

const Question = ({ data, userResponse, updateNumberQue }) => {
  // const [numQuestion, setNumQuestion] = useState(0);
  // updateNumberQue(numQuestion);
  // // eslint-disable-next-line camelcase
  // const questions = data.map(({ que_title }) => que_title);
  // const question = questions[numQuestion];
  //
  // // eslint-disable-next-line no-shadow
  // const urlImg = data.map(({ urlImg }) => urlImg);
  // const img = urlImg[numQuestion];
  //
  // const onIncNumQuestion = () => {
  //   setNumQuestion(numQuestion + 1);
  // };
  //
  // const show = numQuestion < data.length;

  console.log(data);
  return (
    !!data && (
      <>
        <QuestionUl>
          <DivStyle>
            {/*<img style={{ width: '100%' }} src={data.urlImg} alt="img" />*/}
            <QuestionStyle>{data.que_title}</QuestionStyle>
          </DivStyle>
        </QuestionUl>
        <AnswerList
          data={data}
          // onIncNumQuestion={onIncNumQuestion}
          // numQuestion={numQuestion}
          // userResponse={userResponse}
        />
      </>
    )
  );
};

export default Question;
