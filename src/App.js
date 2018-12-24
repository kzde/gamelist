import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import CatalogScreen from './screens/GamesCatalogScreen';
import DetailsScreen from './screens/GameDetailsScreen';
import { colorPalettes } from './utils/styleUtils';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  html,body {
    box-sizing: border-box;
    margin: 0;
    font-family:  'Roboto', sans-serif; 
    background: ${colorPalettes.lightGrey};
  }
  img {
    display: block;
  }
  
`

const App = () => (
  <Fragment>
    <Router>
      <div>
        <Route exact path="/" component={CatalogScreen} />
        <Route path="/:gameName" component={DetailsScreen} />
      </div>
    </Router>
    <GlobalStyle />
  </Fragment>
)



export default App;