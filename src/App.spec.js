import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from './App';
import GamesCatalogScreen from './screens/GamesCatalogScreen';

describe('App', () => {
  it('should renders GamesCatalogScreen', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(GamesCatalogScreen)).toHaveLength(1);
  });
})