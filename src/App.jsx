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
  const [ticketNumber, setTicketNumber] = useState(null);
  const [question, setQuestion] = useState([]);
  const [start, setStart] = useState(false);
  const [ticketList, setTicketList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [numQuestion, setNumQuestion] = useState(0);
  const [resultQuestion, setResultQuestion] = useState([]);

  useEffect(() => {
    const getData = (numberTicket) => {
      if (numberTicket != null) {
        getTicket().then((data) => {
          setQuestion(data[numberTicket].questions);
        });
      } else {
        getTicket().then((data) => {
          const tempTicketList = [];
          data.forEach((item, index) => {
            tempTicketList.push(index);
          });
          setTicketList(tempTicketList);
        });
      }
    };
    getData(ticketNumber);
  }, [ticketNumber]);

  const updateTicketNumber = (value) => {
    setTicketNumber(value);
  };

  const onStart = () => {
    setStart(!start);
    setResultQuestion([]);
    setNumQuestion(0);
  };

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
        <Drawer
          updateTicketNumber={updateTicketNumber}
          ticketList={ticketList}
        />

        {ticketNumber != null && <StartBtn start={start} onClick={onStart} />}

        {start && ticketNumber != null ? (
          <>
            <Title>
              {showQuestion && <Timer />}
              {showResult ? 'Ваш результат' : 'Ответьте на вопрос'}
            </Title>

            <QuizTable>
              {numQuestion !== question.length && (
                <CounterQuestionStyle>
                  {showQuestion ? numQuestion + 1 : numQuestion} из{' '}
                  {question.length}
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
