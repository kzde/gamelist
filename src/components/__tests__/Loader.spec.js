import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../Loader';

describe('Loader', () => {
  it('should renders correctly with default params', () => {
    const tree = renderer
      .create(<Loader />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should renders correctly with custom params', () => {
    const tree = renderer
      .create(<Loader color="white" size="60px" backgroundColor="black" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})