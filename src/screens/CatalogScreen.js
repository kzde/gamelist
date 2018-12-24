import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import PlatformChoices from '../components/PlatformChoices';
import choices from '../platforms.json'
import CatalogContainer from '../components/CatalogContainer';
import { getGamesByPlatform } from '../utils/selectors';
import gamesObj from '../games.json';

const { games } = gamesObj

class CatalogScreen extends Component {
  constructor(props) {
    super(props);
    const defaultPlatform = choices.platforms[0];
    this.state = {
      selectedPlatform: defaultPlatform,
      games: getGamesByPlatform(games, defaultPlatform)
    }
    this.platformSelected = this.platformSelected.bind(this);
  }

  platformSelected(selectedPlatform) {
    this.setState({ 
      selectedPlatform,
      games: getGamesByPlatform(games, selectedPlatform)
    })
  }

  render() {
    return (
      <Fragment>
        <Header text={`Games catalog ${this.state.selectedPlatform}`} />
        <PlatformChoices
          choices={choices.platforms}
          handleClick={this.platformSelected}
          selectedPlatform={this.state.selectedPlatform}
        />
        <CatalogContainer games={this.state.games} />
      </Fragment>
    )
  }
}

export default CatalogScreen;