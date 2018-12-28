import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '../../src/components/Loader';

storiesOf('Loader', module)
  .add('with loader size props', () => (
    <Loader size="60px" />
  ))
  .add('with loader color props', () => (
    <Loader color="red" />
  ))
  .add('with backgroundColor props', () => (
    <Loader color="red" backgroundColor="black"/>
  ))