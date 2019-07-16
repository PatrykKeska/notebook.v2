import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bulbIcon from 'assets/Icons/bulb.svg';
import PropTypes from 'prop-types';
import logoutIcon from 'assets/Icons/logout.svg';
import pencilIcon from 'assets/Icons/pencil.svg';
import facebookIcon from 'assets/Icons/facebook-black.svg';
import ButtonIcon from '../../atoms/ButtonIcon /ButtonIcon';

const BackgroundTheme = styled.div`
  background-color: ${({ theme, pageType }) => theme[pageType]};
  max-width: 80px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const InnerWrapper = styled.div`
  margin-top: 50px;
`;

const Sidebar = ({ pageType }) => (
  <BackgroundTheme pageType={pageType}>
    <InnerWrapper>
      <ButtonIcon as={NavLink}
        to="/notes"
        activeclass="active"
        icon={pencilIcon} />
      <ButtonIcon as={NavLink}
        to="/facebooks"
        activeclass="active"
        icon={facebookIcon} />
      <ButtonIcon as={NavLink}
        to="/articles"
        activeclass="active"
        icon={bulbIcon} />
    </InnerWrapper>

    <ButtonIcon as={NavLink}
      to="/login"
      activeclass="active"
      icon={logoutIcon} />
  </BackgroundTheme>
);

Sidebar.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default Sidebar;
