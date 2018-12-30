import React from 'react';
import { storiesOf } from '@storybook/react';
import PlatformChoices from '../../src/components/PlatformChoices';

storiesOf('PlatformChoices', module)
  .add('with selected platform', () => (
    <PlatformChoices 
    choices={["PS4", "X1", "SWITCH"]}
    handleClick={()=> {}}
    selectedPlatform="X1"
    />
  ))