import React from 'react';
import renderer from 'react-test-renderer';
import { header as Header } from '../Header';

jest.mock('react-router-dom', () => ({ NavLink: 'NavLink' }));

describe('Header', () => {
  it('should renders correctly', () => {
    const props = {
      text: 'Header text',
      i18n: {
        changeLanguage: jest.fn(),
        currentLanguage: 'en'
      }
    };
    const tree = renderer.create(<Header {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
