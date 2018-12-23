import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Header', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<Header text="Header text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})