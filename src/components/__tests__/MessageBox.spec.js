import React from 'react';
import renderer from 'react-test-renderer';
import MessageBox from '../MessageBox';

describe('MessageBox', () => {
  const props = {
    content: 'Messages'
  };
  it('should renders correctly', () => {
    const tree = renderer.create(<MessageBox {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
