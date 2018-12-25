import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundScreen from '../NotFoundScreen';

jest.mock('../../components/Header', () => 'Header');
jest.mock('../../components/MessageBox', () => 'MessageBox');

describe('NotFoundScreen', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<NotFoundScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})