import React from 'react';
import { Header, Image, Title, Wrapper, Container } from './StyledComponents';
import Answers from '../Answers';

const Question = ({ data, setAnswers }) =>
  !!data && (
    <Container>
      <Wrapper>
        <Header>
          {data.urlImg && <Image src={data.urlImg} alt="question image" />}
          <Title>{data.que_title}</Title>
        </Header>
      </Wrapper>
      <Answers data={data} setAnswers={setAnswers} />
    </Container>
  );

export default Question;
