import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  background: linear-gradient(90deg, #5041d2 0%, #7969e6 100%);
  height: 100vh;
  padding: 0 100px;
`;

export const Title = styled.h1`
  margin: 50px 0 10px;
  color: #fff;
  text-align: center;
`;

export const QuizTable = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid;
  border-radius: 5px;
  color: #fff;
  min-height: 500px;
`;

export const CounterQuestionStyle = styled.div`
  min-width: 60px;
  display: flex;
  justify-content: flex-end;
`;

export const TicketTitle = styled.h2`
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      opacity: 0.5;
    `}
  &:hover {
    opacity: 0.5;
  }
`;
