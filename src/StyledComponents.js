import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(90deg, #5041d2 0%, #7969e6 100%);
  height: 100vh;
  padding: 0 100px;
`;

const Title = styled.h1`
  margin: 50px 0 10px;
  color: #fff;
  text-align: center;
`;

const QuizTable = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid;
  border-radius: 5px;
  color: #fff;
`;

export { QuizTable, Title, Container };
