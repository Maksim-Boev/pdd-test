import React, { useState, useEffect } from 'react';

import Question from './components/Question';
import QuizResults from './components/QuizResults';
import Timer from './components/Timer';
import { getTicket } from './service';
import StartBtn from './components/StartBtn';
import {
  Container,
  QuizTable,
  Title,
  CounterQuestionStyle,
  TicketTitle,
} from './StyledComponents';
import { shuffle } from './utils';

const App = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [isTicketsShown, setIsTicketsShown] = useState(true);
  const [ticket, setTicket] = useState([]);
  const [question, setQuestion] = useState(null);
  const [activeTicket, setActiveTicket] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isPoolEnded, setIsPoolEnded] = useState(false);

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

  useEffect(() => {
    if (userAnswers.length === ticket.length) {
      setStart(false);
      setIsPoolEnded(true);
    }
  }, [userAnswers]);

  const onStart = () => {
    setStart(!start);
    setIsTicketsShown(false);
  };

  const onTicketChoose = (ticketData) => {
    setActiveTicket(ticketData.id);
    setTicket(shuffle(ticketData.questions));
    setQuestion(ticketData.questions[0]);
  };

  const onUserAnswer = (questionId, answerId, rightAnswer, answerText) => {
    const answers = [...userAnswers];
    answers.push({ questionId, answerId, rightAnswer, answerText });
    setUserAnswers(answers);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  console.log(isPoolEnded);
  return (
    <>
      <Container>
        {isTicketsShown && <h1>Выберите билет:</h1>}
        {isTicketsShown && questionsData.length
          ? questionsData.map((ticketData) => (
              <TicketTitle
                onClick={() => onTicketChoose(ticketData)}
                active={ticketData.id === activeTicket}
                key={ticketData.id.toString()}
              >
                Ticket {ticketData.id}
              </TicketTitle>
            ))
          : isTicketsShown && <p>loading...</p>}
        {!start && <StartBtn disabled={!question} onClick={onStart} />}

        {start && !!ticket && !isTicketsShown ? (
          <>
            <Title>
              {start && <Timer />}
              {!start ? 'Ваш результат' : 'Ответьте на вопрос'}
            </Title>

            <QuizTable>
              {start && (
                <CounterQuestionStyle>
                  {start && userAnswers.length + 1} из {ticket.length}
                </CounterQuestionStyle>
              )}
              {start &&
                ticket.map(
                  (q, idx) =>
                    currentQuestionIndex === idx && (
                      <Question data={q} setAnswers={onUserAnswer} />
                    )
                )}

              {isPoolEnded && <QuizResults result={userAnswers} />}
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
