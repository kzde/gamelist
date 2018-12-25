import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import { getGameDetailsByName } from '../utils/selectors';
import gamesObj from '../games.json';
import Paper from '../components/Paper';
import DetailContent from '../components/DetailContent';
import NotFoundScreen from './NotFoundScreen';

const { games } = gamesObj;

const Media = styled.div``;
const Img = styled.img`
  width: 100%;
  height: 368px;
`;
const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 368px;
  box-shadow: inset 0px -16px 16px rgba(0, 0, 0, 0.25);
  top: 64px;
  left: 0;
`
const DetailSection = styled.section`
  margin: 64px 136px 89px 136px;
`

const GameDetailsScreen = (props) => {
  const gameName = props.match.params.gameName;
  const gameDetails = getGameDetailsByName(games, gameName);
  return (
    <Fragment>
      {gameDetails ?
        <Fragment>
          <Header text="Game details" />
          <Media>
            <Img src={gameDetails.hero} />
            <Shadow />
          </Media>
          <DetailSection>
            <Paper
              children={
                <DetailContent
                  title={gameDetails.name}
                  subTitle={gameDetails.platform}
                  content={gameDetails.description}
                />
              }
            />
          </DetailSection>
        </Fragment>
        : <NotFoundScreen />
      }

    </Fragment>
  )
}

GameDetailsScreen.propTypes = {
  match: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.string.isRequired
    })
  }).isRequired
};

export default GameDetailsScreen;