import React, { useState, useEffect } from 'react';

import Question from './components/Question';
import QuizResults from './components/QuizResults';
import Timer from './components/Timer';
import Drawer from './components/Drawer';
import { getTicket } from './service';
import StartBtn from './components/StartBtn';
import { Container, QuizTable, Title } from './StyledComponents';
import { CounterQuestionStyle } from './components/Question/StyledComponents';

const App = () => {
  const [ticket, setTicket] = useState(null);
  const [question, setQuestion] = useState([]);
  const [start, setStart] = useState(false);
  const [dataLength, setDataLength] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [numQuestion, setNumQuestion] = useState(0);
  const [resultQuestion, setResultQuestion] = useState([]);

  useEffect(() => {
    getTicket().then((data) => {
      const count = [];
      data.forEach((item, index) => {
        count.push(index);
      });
      setDataLength(count);
    });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    ticket != null &&
      getTicket().then((data) => {
        setQuestion(data[ticket].questions);
      });
    return setQuestion([]);
  }, [ticket]);

  const updateTicket = (value) => {
    setTicket(value);
  };

  const onStart = () => {
    setStart(!start);
    setResultQuestion([]);
    setNumQuestion(0);
  };

  // eslint-disable-next-line camelcase
  const questions = question.map(({ que_title }) => que_title);

  const allQuestions = questions.length;

  const userResponse = (response) => {
    setResultQuestion((prevState) => [
      ...prevState,
      {
        id: question[numQuestion].idQuestion,
        question: question[numQuestion].que_title,
        result: response,
      },
    ]);
  };

  const updateNumberQue = (value) => {
    setNumQuestion(value);
  };

  const resetResult = () => {
    setResultQuestion([]);
    setNumQuestion(0);
  };

  const showResult = numQuestion >= question.length && question.length !== 0;
  const showQuestion = numQuestion < question.length;

  return (
    <>
      <Container>
        <Drawer updateTicket={updateTicket} dataLength={dataLength} />

        <StartBtn ticket={ticket} start={start} onClick={onStart} />

        {start && ticket != null ? (
          <>
            <Title>
              {showQuestion && <Timer />}
              {showResult ? 'Ваш результат' : 'Ответьте на вопрос'}
            </Title>

            <QuizTable>
              {numQuestion !== question.length && (
                <CounterQuestionStyle>
                  {showQuestion ? numQuestion + 1 : numQuestion} из{' '}
                  {allQuestions}
                </CounterQuestionStyle>
              )}
              {showQuestion && (
                <Question
                  data={question}
                  userResponse={userResponse}
                  updateNumberQue={updateNumberQue}
                />
              )}

              {showResult && (
                <QuizResults
                  resultQuestion={resultQuestion}
                  resetResult={resetResult}
                />
              )}
            </QuizTable>
          </>
        ) : (
          <h1>Выберите билет</h1>
        )}
      </Container>
    </>
  );
};

export default App;
