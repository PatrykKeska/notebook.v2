import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bulbIcon from 'assets/Icons/bulb.svg';
// import addIcon from 'assets/Icons/add.svg';
import logoutIcon from 'assets/Icons/logout.svg';
import pencilIcon from 'assets/Icons/pencil.svg';
import facebookIcon from 'assets/Icons/facebook-black.svg';
import ButtonIcon from '../../atoms/ButtonIcon /ButtonIcon';

const YellowBackground = styled.div`
  background-color: ${({ theme }) => theme.note};
  max-width: 80px;
  height: 99vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const InnerWrapper = styled.div`
  margin-top: 50px;
`;

const Sidebar = () => (
  <YellowBackground>
    <InnerWrapper>
      <ButtonIcon exact
        as={NavLink}
        to="/"
        activeclass="active"
        icon={pencilIcon} />
      <ButtonIcon as={NavLink}
        to="/facebook"
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
  </YellowBackground>
);

export default Sidebar;
