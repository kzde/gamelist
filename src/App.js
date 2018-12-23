import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import CatalogScreen from './screens/CatalogScreen';
import {colorPalettes} from './utils/styleUtils';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  html,body {
    box-sizing: border-box;
    margin: 0;
    font-family:  'Roboto', sans-serif; 
    background: ${colorPalettes.lightGrey}
  }
`

const App = () => {
  return (
    <Fragment>
      <CatalogScreen />
      <GlobalStyle />
    </Fragment>
  )
}


export default App;