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
  const [questionsData, setQuestionsData] = useState([]);
  const [isTicketsShown, setIsTicketsShown] = useState(true);
  const [ticket, setTicket] = useState(null);
  const [question, setQuestion] = useState(null);
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const [dataLength, setDataLength] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [numQuestion, setNumQuestion] = useState(0);
  const [resultQuestion, setResultQuestion] = useState([]);

  useEffect(() => {
    getTicket().then((data) => {
      const tempData = [];
      data.forEach((item, index) => {
        tempData.push({
          id: index + 1,
          questions: item.questions,
        });
      });

      setQuestionsData(tempData);
    });
  }, []);

  // useEffect(() => {
  //   // eslint-disable-next-line no-unused-expressions
  //   ticket != null &&
  //     getTicket().then((data) => {
  //       setQuestion(data[ticket].questions);
  //     });
  //   return setQuestion([]);
  // }, [ticket]);

  const updateTicket = (value) => {
    setTicket(value);
  };

  const onStart = () => {
    setStart(!start);
    setResultQuestion([]);
    setNumQuestion(0);
  };

  // eslint-disable-next-line camelcase
  // const questions = question.map(({ que_title }) => que_title);

  // const allQuestions = questions.length;

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

  // const showResult = numQuestion >= question.length && question.length !== 0;
  // const showQuestion = numQuestion < question.length;

  const onTicketChoose = (ticketData) => {
    setTicket(ticketData);
    setQuestion(ticketData.questions[0]); // TODO set in map
    setIsTicketsShown(false);
  };

  console.log(start);
  return (
    <>
      <Container>
        {isTicketsShown && <h1>Выберите билет</h1>}
        {isTicketsShown && questionsData.length
          ? questionsData.map((el) => (
              <h2 onClick={() => onTicketChoose(el)} key={el.id.toString()}>
                Ticket {el.id}
              </h2>
            ))
          : isTicketsShown && <p>loading...</p>}
        {!!ticket && <StartBtn start={start} onClick={onStart} />}

        {start && !!ticket && !isTicketsShown ? (
          <>
            <Title>
              {start && <Timer />}
              {!start ? 'Ваш результат' : 'Ответьте на вопрос'}
            </Title>

            <QuizTable>
              {start && (
                <CounterQuestionStyle>
                  {start && question.idQuestion} из {ticket.questions.length}
                </CounterQuestionStyle>
              )}
              {start && (
                <Question
                  data={question}
                  // userResponse={userResponse}
                  // updateNumberQue={updateNumberQue}
                />
              )}

              {/*{showResult && (*/}
              {/*  <QuizResults*/}
              {/*    resultQuestion={resultQuestion}*/}
              {/*    resetResult={resetResult}*/}
              {/*  />*/}
              {/*)}*/}
            </QuizTable>
          </>
        ) : (
          <p />
        )}
      </Container>
    </>
  );
};

export default App;
