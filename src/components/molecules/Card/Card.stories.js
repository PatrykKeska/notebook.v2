import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('molecules/Card', module)
  .add('note', () => <Card cardType="note" />)
  .add('facebook', () => <Card cardType="facebook" />)
  .add('link', () => <Card cardType="article" />);
