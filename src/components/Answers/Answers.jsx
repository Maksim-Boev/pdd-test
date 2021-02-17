import React from 'react';
import { Answer } from './StyledComponent';

const Answers = ({ data, setAnswers }) =>
  data.que_answers.map((answerData) => (
    <Answer onClick={() => setAnswers(answerData.id)}>
      {answerData.answer}
    </Answer>
  ));

export default Answers;
