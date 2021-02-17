import React from 'react';
import { Answer } from './StyledComponent';
import { shuffle } from '../../utils';

const Answers = ({ data, setAnswers }) => (
  <div>
    {shuffle(data.que_answers).map((answerData) => (
      <Answer onClick={() => setAnswers(answerData.id)}>
        {answerData.answer}
      </Answer>
    ))}
  </div>
);

export default Answers;
