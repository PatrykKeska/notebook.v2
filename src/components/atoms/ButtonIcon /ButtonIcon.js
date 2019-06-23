import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  border: None;
  border-radius: 10px;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50% 50%;
  background-image: url(${({ icon }) => icon});
  transition: background-color 0.3s ease-in-out;
  will-change: auto;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
