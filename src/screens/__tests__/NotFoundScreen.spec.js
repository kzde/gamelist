import React from 'react';
import renderer from 'react-test-renderer';
import { notFoundScreen as NotFoundScreen } from '../NotFoundScreen';

jest.mock('../../components/Header', () => 'Header');
jest.mock('../../components/MessageBox', () => 'MessageBox');


const props = {
  i18n: {
    _: jest.fn().mockReturnValue('translation fake')
  }
}
describe('NotFoundScreen', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<NotFoundScreen {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})