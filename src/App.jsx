import React, { useState, useEffect } from 'react';

import Question from './components/Question';
import QuizResults from './components/QuizResults';
import Timer from './components/Timer';
import Drawer from './components/Drawer';
import { getTicket } from './service';
import StartBtn from './components/StartBtn';
import {
  Container,
  CurrentQuestion,
  QuizTable,
  Title,
} from './StyledComponents';

const App = () => {
  const [ticketNumber, setTicketNumber] = useState(null);
  const [question, setQuestion] = useState([]);
  const [startTest, setStartTest] = useState(false);
  const [ticketList, setTicketList] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState(null);
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
    setStartTest(!startTest);
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

        {ticketNumber != null && (
          <StartBtn start={startTest} onClick={onStart} />
        )}

        {startTest && ticketNumber != null ? (
          <>
            <Title>
              {showQuestion && <Timer />}
              {showResult ? 'Ваш результат' : 'Ответьте на вопрос'}
            </Title>

            <QuizTable>
              {numberQuestion !== question.length && (
                <CurrentQuestion>
                  {numberQuestion + 1} из {question.length}
                </CurrentQuestion>
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
