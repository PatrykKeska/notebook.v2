import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import Input from '../components/atoms/Input/Input';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 20px 30px 20px 40px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
`;

const StyledSubtittle = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.6rem;
  margin: 0 0 50px 0;
  padding: 0;
`;

const StyledTittle = styled(Heading)`
  margin: 10px 0 0 0;
`;

const GridTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <Input search
        placeholder="search" />
      <StyledTittle>{pageType}</StyledTittle>
      <StyledSubtittle>6 {pageType}</StyledSubtittle>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['notes', 'facebooks', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default GridTemplate;
