import React from 'react';
import { connect } from 'react-redux';
import {
  QuestionUl,
  CounterQuestionStyle,
  DivStyle,
  QuestionStyle,
} from './StyledComponents';

const Question = ({ count, data }) => {
  // eslint-disable-next-line camelcase
  const question = data.map(({ que_title }) => que_title);
  // eslint-disable-next-line no-shadow
  const urlImg = data.map(({ urlImg }) => urlImg);

  return (
    <QuestionUl>
      <DivStyle>
        {urlImg[count] !== undefined && urlImg[count].length !== 0 && (
          <img style={{ width: '100%' }} src={urlImg[count]} alt="img" />
        )}
        <QuestionStyle>{question[count]}</QuestionStyle>
      </DivStyle>
      <CounterQuestionStyle>
        {count < data.length ? count + 1 : data.length} из {data.length}
      </CounterQuestionStyle>
    </QuestionUl>
  );
};

const mapStateToProps = ({ count }) => {
  return {
    count,
  };
};

export default connect(mapStateToProps)(Question);
