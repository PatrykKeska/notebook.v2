import React from 'react';
import PropTypes from 'prop-types';
// import stylef from 'styled-components'
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = ({ pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <h1>Note</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ea quibusdam recusandae
      labore quae amet, ratione, odit dolorum blanditiis voluptates dicta illo ipsam qui obcaecati
      sunt ut facere sit officia.
    </p>

    <Link to="/">go back</Link>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'facebooks', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
};

export default DetailsTemplate;
