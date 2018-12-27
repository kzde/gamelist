import React from 'react';
import { storiesOf } from '@storybook/react';
import Paper from '../../src/components/Paper';

storiesOf('Paper', module)
  .add('with text', () => (
    <Paper>Simple paper component</Paper>
  ))