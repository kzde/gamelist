import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link';

describe('Link', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<Link text="link test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
