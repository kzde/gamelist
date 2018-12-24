import React from 'react';
import renderer from 'react-test-renderer';
import GameDetailsScreen from '../GameDetailsScreen';
import * as selectors from '../../utils/selectors';

jest.mock('../../components/Header', () => 'Header');
jest.mock('../../components/Paper', () => 'Paper');
jest.mock('../../components/DetailContent', () => 'DetailContent');

describe('GameDetailsScreen', () => {
  it('should renders correctly', () => {
    const props = {
      match: {
        params: {
          gameName: '94%'
        }
      }
    };
    const getGameDetailsByNameSpy = jest.fn().mockReturnValue({hero: 'hero', description:'description', name:'name', platform: 'platform'})
    selectors.getGameDetailsByName = getGameDetailsByNameSpy;
    const tree = renderer
      .create(<GameDetailsScreen {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})