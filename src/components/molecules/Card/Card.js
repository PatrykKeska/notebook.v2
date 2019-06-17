import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import facebookAvatar from 'assets/Icons/facebook.svg';
import linkAvatar from 'assets/Icons/link.svg';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 40px -10px hsla(0, 0%, 0%, 0.5);
  border-radius: 10px;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  background-color: ${({ theme, cardType }) => theme[cardType]};
  padding: 5px;
  margin-bottom: 20px;
  position: relative;

  :first-of-type {
    z-index: 2;
  }

  ${({ white }) =>
    white &&
    css`
      background-color: white;
      min-height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DataInfo = styled(Paragraph)`
  font-weight: bold;
`;

const StyledAvatar = styled.img`
  width: 55px;
  height: 55px;
  border: 5px solid ${({ theme }) => theme.facebook};
  position: absolute;
  bottom: -20px;
  right: 15px;
  border-radius: 50px;
  background-color: white;
`;
const Styledlink = styled.img`
  width: 55px;
  height: 55px;
  border: 5px solid ${({ theme }) => theme.article};
  position: absolute;
  bottom: -20px;
  right: 15px;
  border-radius: 50px;
  background-color: white;
  padding: 10px;
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper cardType={cardType}>
      <Heading>Our Heading </Heading>
      <DataInfo>3 Days</DataInfo>

      {cardType === 'facebook' && <StyledAvatar src={facebookAvatar} />}
      {cardType === 'article' && <Styledlink src={linkAvatar} />}
    </InnerWrapper>
    <InnerWrapper white>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil quas voluptatum natus
        commodi, sapiente id soluta autem porro ut laboriosam minus amet qui at odit quasi iure
        laborum fuga.
      </Paragraph>

      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.string,
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
