import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import facebookAvatar from '../assets/Icons/facebook.svg';
import UserPageTemplate from './UserPageTemplate';
import Heading from '../components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  width: 40vw;
  text-align: center;
  margin-left: 5vw;
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled(Link)`
  background-color: ${({ theme, pageType }) => theme[pageType]};
  color: black;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 8px 13px;
  border-radius: 20px;
  text-decoration: none;
  display: block;
  margin-top: 5vh;
  width: 180px;
  font-weight: ${({ theme }) => theme.bold};
`;

const OpenLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-decoration: none;
  color: black;
  border-bottom: 1px solid black;
  margin-top: 10px;
  display: block;
`;

const HeadingWrapper = styled.div`
  position: relative;
  display: inline-grid;
  width: 100%;
  grid-template-columns: 1fr 50px;
`;

const StyledAvatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-color: white;
  margin-left: 10%;
`;

const DetailsTemplate = ({ pageType }) => (
  <StyledWrapper>
    <UserPageTemplate pageType={pageType}>
      <HeadingWrapper>
        <Heading>Note</Heading>
        {pageType === 'facebooks' && <StyledAvatar src={facebookAvatar} />}
      </HeadingWrapper>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ea quibusdam recusandae
        labore quae amet, ratione, odit dolorum blanditiis voluptates dicta illo ipsam qui obcaecati
        sunt ut facere sit officia.
      </p>

      <Button pageType={pageType}
        to="/">
        Close / Save
      </Button>

      <OpenLink href="www.google.com">Open a {pageType}</OpenLink>
    </UserPageTemplate>
  </StyledWrapper>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'facebooks', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
};

export default DetailsTemplate;
