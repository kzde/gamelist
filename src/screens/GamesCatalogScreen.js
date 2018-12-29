import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import PlatformChoices from '../components/PlatformChoices';
import choices from '../datas/platforms.json';
import CatalogContainer from '../components/CatalogContainer';
import { getGamesByPlatform } from '../utils/selectors';
import gamesObj from '../datas/games.json';
import withI18n from '../contexts/withI18n';
import { headerHeight } from '../utils/styleUtils';

const { games } = gamesObj;

const ContentWrapper = styled.div`
  position:absolute;
  top: ${headerHeight};
  left:0;
  right:0;
  bottom:0;
`;
class GamesCatalogScreen extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    const defaultPlatform = choices.platforms[0];
    this.state = {
      selectedPlatform: defaultPlatform,
      games: getGamesByPlatform(games, defaultPlatform)
    };
    this.platformSelected = this.platformSelected.bind(this);
  }

  platformSelected(selectedPlatform) {
    this.setState({
      selectedPlatform,
      games: getGamesByPlatform(games, selectedPlatform)
    });
  }

  render() {
    return (
      <Fragment>
        <Header
          text={`${this.props.i18n._('catalog.header.title')} ${this.state.selectedPlatform}`}
        />
        <ContentWrapper>
          <PlatformChoices
            choices={choices.platforms}
            handleClick={this.platformSelected}
            selectedPlatform={this.state.selectedPlatform}
          />
          <CatalogContainer games={this.state.games} />
        </ContentWrapper>
      </Fragment>
    );
  }
}

export const gamesCatalogScreen = GamesCatalogScreen;
export default withI18n(GamesCatalogScreen);
