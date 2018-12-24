import React from 'react';
import renderer from 'react-test-renderer';
import Paper from '../Paper';

describe('Paper', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<Paper children={<div>paper</div>} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})