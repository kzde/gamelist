import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import I18nProvider from './contexts/I18nProvider';

ReactDOM.render(
  <I18nProvider>
    <App />
  </I18nProvider>,
  document.getElementById('root'),
);
