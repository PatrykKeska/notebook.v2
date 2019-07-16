import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.light};
  font-weight: ${({ theme }) => theme.bold};

  ::first-letter {
    text-transform: uppercase;
  }
`;

export default Heading;
