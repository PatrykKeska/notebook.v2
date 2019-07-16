import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}g
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  pageType: PropTypes.oneOf(['notes', 'facebooks', 'articles']),
};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default UserPageTemplate;
