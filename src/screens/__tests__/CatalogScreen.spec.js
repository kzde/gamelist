import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CatalogScreen from '../CatalogScreen';

jest.mock('../../components/CatalogContainer', () => 'CatalogContainer');
jest.mock('../../components/Header', () => 'Header');
jest.mock('../../components/PlatformChoices', () => 'PlatformChoices');

describe('CatalogScreen', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<CatalogScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  describe('platformSelected', () => {
    it('should set the selectedPlatform state when platformSelected function was called', () => {
      const wrapper = shallow(<CatalogScreen />);
      wrapper.setState({selectedPlatform: 'PC'})
      wrapper.instance().platformSelected('X1');
      expect(wrapper.state('selectedPlatform')).toEqual('X1');
    })
  })
})