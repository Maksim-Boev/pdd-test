import styled from 'styled-components';

const UlStyle = styled.ul`
  padding: 0;
  margin: 0;
  ${({ open }) => {
    return open ? 'left: 0' : 'left: -300px';
  }};
  transition: left 0.22s ease-in;
  position: fixed;
  background-color: #fff;
  height: 100%;
  width: 300px;
  z-index: 1;
`;
export default UlStyle;
