import React from 'react';
import { storiesOf } from '@storybook/react';
import ClickableText from '../../src/components/ClickableText';

storiesOf('ClickableText', module)
  .add('with text', () => (
    <ClickableText text="Default style with text"/>
  ))
  .add('with text color props', () => (
    <ClickableText 
      text="You can change the text color"
      textColor="mediumseagreen"
    />
  ))