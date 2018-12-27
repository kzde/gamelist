import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../../src/components/Link';

storiesOf('Link', module)
  .add('with text', () => (
    <Link text="Default link style with text"/>
  ))
  .add('with text color props', () => (
    <Link 
      text="You can change the text color"
      textColor="mediumseagreen"
    />
  ))