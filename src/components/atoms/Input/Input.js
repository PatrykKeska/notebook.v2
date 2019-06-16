import styled, { css } from 'styled-components';
import magnifier from 'assets/Icons/magnifier.svg';

const Input = styled.input`
  padding: 15px 25px;
  border-radius: 50px;
  border: none;
  background-color: ${({ theme }) => theme.gray100};
  font-size: ${({ theme }) => theme.s};

  ::placeholder {
    text-transform: uppercase;
    color: ${({ theme }) => theme.gray200};
  }

  ${({ search }) =>
    search &&
    css`
      background-image: url(${magnifier});
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: 15% 50%;
      padding: 10px 10px 10px 50px;
    `}
`;

export default Input;
