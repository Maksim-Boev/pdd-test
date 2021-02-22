import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextQuestion = styled.p`
  margin: 10px 0;
`;

const Img = styled.img`
  width: 100%;
  max-height: 35vh;
  object-fit: contain;
`;

export { Wrapper, TextQuestion, Img };
