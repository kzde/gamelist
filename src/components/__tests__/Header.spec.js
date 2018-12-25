import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { header as Header } from '../Header';

describe('Header', () => {
  it('should renders correctly', () => {
    const props = {
      text: "Header text",
      history: {
        push: jest.fn()
      },
      i18n: {
        changeLanguage: jest.fn()
      }
    }
    const tree = renderer
      .create(<Header {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('navToHome', () => {
    const navSpy = jest.fn();
    const props = {
      text: "Header text",
      history: {
        push: navSpy
      },
      i18n: {
        changeLanguage: jest.fn()
      }
    }
    it('should call history push', () => {
      const wrapper = shallow(< Header {...props}/>);
      wrapper.instance().navToHome();
      expect(navSpy).toHaveBeenCalledWith('/');
    });
  });

  describe('handleChangeLanguage', () => {
    const changeLanguageSpy = jest.fn();
    const props = {
      text: "Header text",
      history: {
        push: jest.fn()
      },
      i18n: {
        changeLanguage: changeLanguageSpy
      }
    }
    it('should set selectedLanguage state and call changeLanguage function', () => {
      const wrapper = shallow(< Header {...props}/>);
      wrapper.instance().handleChangeLanguage('fr');
      expect(changeLanguageSpy).toHaveBeenCalledWith('fr');
    });
  })
})