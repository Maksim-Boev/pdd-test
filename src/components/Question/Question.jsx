import React from 'react';
import { Header, Title, Wrapper } from './StyledComponents';
import Answers from '../Answers';

const Question = ({ data, setAnswers }) =>
  !!data && (
    <>
      <Wrapper>
        <Header>
          <img style={{ width: '100%' }} src={data.urlImg} alt="img" />
          <Title>{data.que_title}</Title>
        </Header>
      </Wrapper>
      <Answers data={data} setAnswers={setAnswers} />
    </>
  );

export default Question;
