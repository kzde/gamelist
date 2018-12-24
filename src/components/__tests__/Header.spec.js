import React from 'react';
import renderer from 'react-test-renderer';
import { header as Header } from '../Header';

describe('Header', () => {
  it('should renders correctly', () => {
    const props = {
      text: "Header text",
      history: {
        push: jest.fn()
      }
    }
    const tree = renderer
      .create(<Header {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})