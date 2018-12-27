import React from 'react';
import { storiesOf } from '@storybook/react';
import {header as Header} from '../../src/components/Header';

storiesOf('Header', module)
  .add('with a title', () => (
    <Header text="Header title" />
  ))