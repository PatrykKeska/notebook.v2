import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 50px;
  height: 50px;
  border: None;
  border-radius: 10px;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50% 50%;
  background-image: url(${({ icon }) => icon});
`;

export default ButtonIcon;
