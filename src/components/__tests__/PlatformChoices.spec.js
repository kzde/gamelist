import React from 'react';
import renderer from 'react-test-renderer';
import PlatformChoices from '../PlatformChoices';

const props = {
  choices: ['platform', 'another platform'],
  selectedPlatform: 'platform',
  handleClick: () => {}  
}

describe('PlatformChoices', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<PlatformChoices {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
