import styled from 'styled-components';

const AnswerItem = styled.li`
  list-style: none;
  padding: 10px 20px;
  margin-bottom: 5px;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background: rgba(255, 255, 255, 0.2);
    transition: background 0.3s ease-in-out;
  }
`;

export default AnswerItem;
