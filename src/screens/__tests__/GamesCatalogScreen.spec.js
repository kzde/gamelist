import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { gamesCatalogScreen as GamesCatalogScreen } from '../GamesCatalogScreen';

jest.mock('../../components/CatalogContainer', () => 'CatalogContainer');
jest.mock('../../components/Header', () => 'Header');
jest.mock('../../components/PlatformChoices', () => 'PlatformChoices');

const props = {
  data: [
    {
      hero: 'hero',
      description: 'description',
      name: 'name',
      platform: 'platform'
    }
  ],
  i18n: {
    _: jest.fn().mockReturnValue('translation fake')
  }
};
describe('GamesCatalogScreen', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<GamesCatalogScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('platformSelected', () => {
    it('should set the selectedPlatform state when platformSelected function was called', () => {
      const wrapper = shallow(<GamesCatalogScreen {...props} />);
      wrapper.setState({ selectedPlatform: 'PC' });
      wrapper.instance().platformSelected('X1');
      expect(wrapper.state('selectedPlatform')).toEqual('X1');
    });
  });
});
