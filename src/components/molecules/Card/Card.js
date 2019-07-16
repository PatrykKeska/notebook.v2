import React from 'react';
import { Redirect } from 'react-router-dom';
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
  height: 350px;
  max-height: 400px;
`;

const InnerWrapper = styled.div`
  background-color: ${({ theme, cardType }) => theme[cardType]};
  padding: 2px 10px;
  margin-bottom: 10px;
  position: relative;

  :first-of-type {
    z-index: 2;
  }

  ${({ white }) =>
    white &&
    css`
      background-color: white;
      height: 200px;
      display: flex;
      padding: 5px 10px;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    `}
`;

const DataInfo = styled(Paragraph)`
  font-weight: bold;
`;

const StyledAvatar = styled.img`
  width: 55px;
  height: 55px;
  border: 5px solid ${({ theme }) => theme.facebooks};
  position: absolute;
  bottom: -20px;
  right: 15px;
  border-radius: 50px;
  background-color: white;
`;
const Styledlink = styled.a`
  width: 55px;
  height: 55px;
  border: 5px solid ${({ theme }) => theme.articles};
  position: absolute;
  bottom: -20px;
  right: 15px;
  border-radius: 50px;
  background-color: white;
  background-image: url(${linkAvatar});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 50% 50%;
  padding: 10px;
`;

class Card extends React.Component {
  state = {
    redirect: false,
  };

  handleCardDetails = () =>
    this.setState({
      redirect: true,
    });

  render() {
    const { id, cardType, title, dataCreated, content, link } = this.props;

    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardDetails}>
        <InnerWrapper cardType={cardType}>
          <Heading>{title} </Heading>
          <DataInfo>{dataCreated}</DataInfo>

          {cardType === 'facebooks' && <StyledAvatar src={facebookAvatar} />}
          {cardType === 'articles' && <Styledlink href={link} />}
        </InnerWrapper>
        <InnerWrapper white>
          <Paragraph>{content}</Paragraph>

          <Button secondary>Remove</Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'facebooks', 'articles']),
  title: PropTypes.string,
  dataCreated: PropTypes.string,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  title: 'title',
  dataCreated: 'created date',
  link: 'https://www.google.com/',
};

export default Card;
