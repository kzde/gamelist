import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import GamesCatalogScreen from '../GamesCatalogScreen';

jest.mock('../../components/CatalogContainer', () => 'CatalogContainer');
jest.mock('../../components/Header', () => 'Header');
jest.mock('../../components/PlatformChoices', () => 'PlatformChoices');

describe('GamesCatalogScreen', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<GamesCatalogScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  describe('platformSelected', () => {
    it('should set the selectedPlatform state when platformSelected function was called', () => {
      const wrapper = shallow(<GamesCatalogScreen />);
      wrapper.setState({selectedPlatform: 'PC'})
      wrapper.instance().platformSelected('X1');
      expect(wrapper.state('selectedPlatform')).toEqual('X1');
    })
  })
})