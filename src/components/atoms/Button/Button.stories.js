import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Red: 'red',
      Blue: 'blue',
      Yellow: 'yellow',
      Rainbow: ['red', 'orange', 'etc'],
      None: null,
    };
    const defaultValue = 'red';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);

    return <Button color={value}>Primary</Button>;
  })

  .add('Secondary', () => <Button secondary>Secondary</Button>);
