import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Question from './components/Question';
import AnswerList from './components/AnswerList';
import QuizResults from './components/QuizResults';
import Timer from './components/Timer';
import Drawer from './components/Drawer';
import { getTicket } from './service/service';
import StartBtn from './components/StartBtn';
import * as actions from './store/actions/actions';
import { Container, QuizTable, Title } from './StyledComponents';

const App = ({ count, resetResult }) => {
  // const [toggle , setToggle] = useState(false)
  const [ticket, setTicket] = useState(null);
  const [que, setQue] = useState([]);
  const [start, setStart] = useState(false);
  const [dataLength, setDataLength] = useState([]);

  // const onToggle = () => {
  // 	setToggle(!toggle)
  // }

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const count = [];
    (async function () {
      await getTicket().then((data) => {
        data.forEach((item, index) => {
          count.push(index);
        });
      });
      // eslint-disable-next-line no-shadow
      setDataLength((dataLength) => [...dataLength, ...count]);
    })();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    ticket != null &&
      getTicket().then((data) => {
        setQue(data[ticket].questions);
      });
  }, [ticket]);

  const updateTicket = (value) => {
    setTicket(value);
  };

  const onStart = () => {
    setStart(!start);
    resetResult();
  };

  console.log('App');
  console.log(ticket);
  console.log(que.length);

  return (
    <>
      <Container>
        <Drawer
          // onToggle={onToggle}
          // isOpen={toggle}
          updateTicket={updateTicket}
          dataLength={dataLength}
        />

        <StartBtn ticket={ticket} start={start} onClick={onStart} />

        {start && ticket != null ? (
          <>
            <Title>
              {count < que.length && <Timer />}
              {count >= que.length ? 'Ваш результат' : 'Ответьте на вопрос'}
            </Title>
            <QuizTable>
              {count < que.length && <Question data={que} />}
              {count < que.length && <AnswerList data={que} />}
              {count >= que.length && <QuizResults />}
            </QuizTable>
          </>
        ) : (
          <h1>Выберите билет</h1>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = ({ count }) => {
  return {
    count,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { resetResult } = bindActionCreators(actions, dispatch);
  return {
    resetResult,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
