import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  width: 200px;
  height: 40px;
  font-family: 'Montserrat';
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(6, 0%, 74%);
      width: 100px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
