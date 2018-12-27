import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import I18nProvider from '../I18nProvider';


const props = {
  children: <div />
}

describe('I18nProvider', () => {
  it('should renders correctly', () => {
    const tree = renderer
      .create(<I18nProvider {...props} ><div>Some test</div></I18nProvider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('handleChangeLanguage', () => {
    it('should set currentLanguage and translationFile state', () => {
      const wrapper = shallow(< I18nProvider {...props}/>);
      wrapper.instance().handleChangeLanguage('fr');
      expect(wrapper.state('currentLanguage')).toEqual('fr');
    });
  })

  describe('translate', () => {
    it('should translate value', () => {
      const wrapper = shallow(< I18nProvider {...props}/>);
      wrapper.setState({translationFile: {fr: 'français'}});
      expect( wrapper.instance().translate('fr')).toEqual('français');
    });

    it('should return key if key not found in translationFile', () => {
      const wrapper = shallow(< I18nProvider {...props}/>);
      wrapper.setState({translationFile: {fr: 'français'}});
      expect( wrapper.instance().translate('en')).toEqual('#en');
    });
  })
})