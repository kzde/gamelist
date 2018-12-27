import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import PlatformChoices from '../components/PlatformChoices';
import choices from '../datas/platforms.json'
import CatalogContainer from '../components/CatalogContainer';
import { getGamesByPlatform } from '../utils/selectors';
import gamesObj from '../datas/games.json';
import withI18n from '../contexts/withI18n';
import PropTypes from 'prop-types';


const { games } = gamesObj

class GamesCatalogScreen extends Component {
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
        <Header text={`${this.props.i18n._('catalog.header.title')} ${this.state.selectedPlatform}`} />
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

GamesCatalogScreen.propsType = {
  i18n: PropTypes.object.isRequired
}
export const gamesCatalogScreen = GamesCatalogScreen;
export default withI18n(GamesCatalogScreen);