import React from 'react';
import renderer from 'react-test-renderer';
import { card as Card } from '../Card';

describe('Card', () => {
  it('should renders correctly', () => {
    const props = {
      cover: 'cover',
      title: 'card title',
      subTitle: 'sub title'
    };
    const tree = renderer.create(<Card {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
