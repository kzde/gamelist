import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../../src/components/Card';
import cardImg from '../../src/assets/images/rayman-card.png';

storiesOf('Card', module)
  .add('with width', () => (
    <Card 
      cover={cardImg}
      title="Card Title"
      subTitle="Some description"
      width="359px"
    />
  ))