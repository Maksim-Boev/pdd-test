import styled from 'styled-components';

const LiStyle = styled.li`
  list-style: none;
  padding: 10px 20px;
  margin-bottom: 5px;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  ${({ trueAnswer }) => {
    if (trueAnswer === '') {
      return;
    }
    // eslint-disable-next-line consistent-return
    return trueAnswer
      ? 'background-color: rgb(32 199 26 / 50%)'
      : 'background-color: rgb(233 30 99 / 50%)';
  }};

  :hover {
    background: rgba(255, 255, 255, 0.2);
    transition: background 0.3s ease-in-out;
  }
`;

export default LiStyle;
