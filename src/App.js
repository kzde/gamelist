import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { colorPalettes } from './utils/styleUtils';
import Loader from './components/Loader';

const CatalogScreen = lazy(() => import('./screens/GamesCatalogScreen'));
const DetailsScreen = lazy(() => import('./screens/GameDetailsScreen'));
const NotFoundScreen = lazy(() => import('./screens/NotFoundScreen'));

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
      <Suspense fallback={<Loader backgroundColor="black" size="60px" color="white"/>}>
      <Switch>
        <Route exact path="/" component={CatalogScreen} />
        <Route path="/:gameName" component={DetailsScreen} />
        <Route component={NotFoundScreen} />
      </Switch>
      </Suspense>
    </Router>
    <GlobalStyle />
  </Fragment>
)
export default App;