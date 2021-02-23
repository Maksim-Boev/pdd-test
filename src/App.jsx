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
  const [ticketNumber, setTicketNumber] = useState(false);
  const [question, setQuestion] = useState([]);
  const [isStartTest, setIsStartTest] = useState(false);
  const [ticketList, setTicketList] = useState([]);
  const [numberQuestion, setNumberQuestion] = useState(null);
  const [resultQuestion, setResultQuestion] = useState([]);

  const isTicketNumber = typeof ticketNumber === 'number';
  const showResult = numberQuestion >= question.length && question.length !== 0;
  const showQuestion = numberQuestion < question.length;

  useEffect(() => {
    const getData = (numberTicket) => {
      if (isTicketNumber) {
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

  const userAnswer = (answer) => {
    setResultQuestion((prevState) => [
      ...prevState,
      {
        id: question[numberQuestion].idQuestion,
        question: question[numberQuestion].que_title,
        result: answer,
      },
    ]);
  };

  const resetResult = () => {
    setResultQuestion([]);
    setNumberQuestion(0);
  };

  return (
    <>
      <Container>
        <Drawer
          updateTicketNumber={(value) => {
            setTicketNumber(value);
            resetResult();
            setIsStartTest(false);
          }}
          ticketList={ticketList}
        />

        {isTicketNumber && (
          <StartBtn
            start={isStartTest}
            onClick={() => {
              setIsStartTest(!isStartTest);
              resetResult();
            }}
          />
        )}

        {isStartTest && isTicketNumber ? (
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
                        key={index.toString()}
                        data={data}
                        userAnswer={userAnswer}
                        numberQuestion={numberQuestion}
                        nextQuestion={() =>
                          setNumberQuestion(numberQuestion + 1)
                        }
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
