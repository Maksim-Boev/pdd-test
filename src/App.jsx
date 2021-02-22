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
  const [numberQuestion, setNumberQuestion] = useState(0);
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
    setNumberQuestion(0);
  };

  const userResponse = (response) => {
    setResultQuestion((prevState) => [
      ...prevState,
      {
        id: question[numberQuestion].idQuestion,
        question: question[numberQuestion].que_title,
        result: response,
      },
    ]);
  };

  const nextQuestion = () => {
    setNumberQuestion(numberQuestion + 1);
  };

  const resetResult = () => {
    setResultQuestion([]);
    setNumberQuestion(0);
  };

  const showResult = numberQuestion >= question.length && question.length !== 0;
  const showQuestion = numberQuestion < question.length;

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
              {numberQuestion !== question.length && (
                <CounterQuestionStyle>
                  {showQuestion ? numberQuestion + 1 : numberQuestion} из{' '}
                  {question.length}
                </CounterQuestionStyle>
              )}
              {showQuestion &&
                question.map(
                  (data, index) =>
                    numberQuestion === index && (
                      <Question
                        key={+index}
                        data={data}
                        userResponse={userResponse}
                        numberQuestion={numberQuestion}
                        nextQuestion={nextQuestion}
                      />
                    )
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
