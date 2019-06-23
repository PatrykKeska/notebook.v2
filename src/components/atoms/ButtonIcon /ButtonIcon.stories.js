import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import bulbIcon from 'assets/Icons/bulb.svg';
import addIcon from 'assets/Icons/add.svg';
import logoutIcon from 'assets/Icons/logout.svg';
import pencilIcon from 'assets/Icons/pencil.svg';
import ButtonIcon from './ButtonIcon';

const BackgroundColor = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.note};
  display: flex;
  justify-content: center;
  align-items: center;
`;

storiesOf('atoms/ButtonIcon', module)
  .addDecorator(story => <BackgroundColor>{story()}</BackgroundColor>)
  .add('bulb', () => <ButtonIcon icon={bulbIcon} />)
  .add('bulbActive', () => <ButtonIcon active
    icon={bulbIcon} />)
  .add('add', () => <ButtonIcon icon={addIcon} />)
  .add('logout', () => <ButtonIcon icon={logoutIcon} />)
  .add('pencil', () => <ButtonIcon icon={pencilIcon} />);
