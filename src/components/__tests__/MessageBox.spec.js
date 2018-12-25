import React from 'react';
import renderer from 'react-test-renderer';
import MessageBox from '../MessageBox';

describe('MessageBox', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<MessageBox children={<div>MessageBoxContent</div>} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})