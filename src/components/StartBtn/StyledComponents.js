import styled, { css } from 'styled-components';

export const StartButton = styled.button`
  height: 40px;
  margin-top: 10px;
  width: 200px;
  border-radius: 10px;
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}
`;
