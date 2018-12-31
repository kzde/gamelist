import React, {
  Fragment, Suspense, lazy, Component
} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { colorPalettes } from './utils/style';
import Loader from './components/Loader';
import gamesObj from './data/games.json';

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
`;

class DataProvider extends Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    return <Fragment>{this.props.children(gamesObj)}</Fragment>;
  }
}

const App = () => (
  <Fragment>
    <DataProvider>
      {data => (
        <Router>
          <Suspense
            fallback={
              <Loader
                backgroundColor={colorPalettes.black}
                size="60px"
                color={colorPalettes.white}
              />
            }
          >
            <Switch>
              <Route
                exact
                path="/"
                component={props => <CatalogScreen {...props} data={data.games} />}
              />
              <Route
                path="/:gameName"
                component={props => <DetailsScreen {...props} data={data.games} />}
              />
              <Route component={NotFoundScreen} />
            </Switch>
          </Suspense>
        </Router>
      )}
    </DataProvider>
    <GlobalStyle />
  </Fragment>
);
export default App;
