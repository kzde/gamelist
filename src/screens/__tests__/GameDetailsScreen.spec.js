import React from 'react';
import renderer from 'react-test-renderer';
import GameDetailsScreen from '../GameDetailsScreen';
import * as selectors from '../../utils/selectors';

jest.mock('../../components/Header', () => 'Header');
jest.mock('../../components/Paper', () => 'Paper');
jest.mock('../../components/DetailContent', () => 'DetailContent');
jest.mock('../../screens/NotFoundScreen', () => 'NotFoundScreen');

describe('GameDetailsScreen', () => {
  it('should renders correctly', () => {
    const props = {
      data: [{
        hero: 'hero',
        description: 'description',
        name: 'name',
        platform: 'platform'
      }],
      match: {
        params: {
          gameName: '94%'
        }
      },
      i18n: {
        _: jest.fn().mockReturnValue('translation fake')
      }
    };
    const getGameDetailsByNameSpy = jest
      .fn()
      .mockReturnValue({
        hero: 'hero',
        description: 'description',
        name: 'name',
        platform: 'platform'
      });
    selectors.getGameDetailsByName = getGameDetailsByNameSpy;
    const tree = renderer.create(<GameDetailsScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders NotFoundScreen if gameDetails is undefined', () => {
    const props = {
      data: [{
        hero: 'hero',
        description: 'description',
        name: 'name',
        platform: 'platform'
      }],
      match: {
        params: {
          gameName: '94%'
        }
      },
      i18n: {
        _: jest.fn().mockReturnValue('translation fake')
      }
    };
    const getGameDetailsByNameSpy = jest.fn().mockReturnValue(undefined);
    selectors.getGameDetailsByName = getGameDetailsByNameSpy;
    const tree = renderer.create(<GameDetailsScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
