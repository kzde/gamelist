import React from 'react';
import renderer from 'react-test-renderer';
import ClickableText from '../ClickableText';

describe('ClickableText', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<ClickableText text="link test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
