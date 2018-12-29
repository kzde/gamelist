import React from 'react';
import renderer from 'react-test-renderer';
import { catalogContainer as CatalogContainer } from '../CatalogContainer';

jest.mock('../Card', () => 'Card');

const props = {
  games: [
    { name: 'game', platform: 'platform', cover: 'cover' },
    { name: 'another game', platform: 'another platform', cover: 'another cover' }
  ],
  history: {
    push: () => {}
  }
};

describe('CatalogContainer', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<CatalogContainer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
