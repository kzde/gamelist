import React from 'react';
import { storiesOf } from '@storybook/react';
import {header as Header} from '../../src/components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

storiesOf('Header', module)
  .add('with a title', () => (
    <Router><Header text="Header title" i18n={{currentLanguage:"en"}}/></Router>
  ))