import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CatalogScreen from '../CatalogScreen';

jest.mock('../../components/CatalogContainer', () => 'CatalogContainer');

describe('CatalogScreen', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<CatalogScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  describe('platFormSelected', () => {
    it('should set the selectedPlatForm state when platFormSelected function was called', () => {
      const wrapper = shallow(<CatalogScreen />);
      wrapper.setState({selectedPlatForm: 'PC'})
      wrapper.instance().platFormSelected('X1');
      expect(wrapper.state('selectedPlatForm')).toEqual('X1');
    })
  })
})