import React from 'react';
import renderer from 'react-test-renderer';
import DetailContent from '../DetailContent';

const props = {
  title: 'Title',
  subTitle: 'Subtitle is an option',
  content: 'content here'
};

describe('DetailContent', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<DetailContent {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})