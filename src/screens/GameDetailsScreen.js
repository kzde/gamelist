import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import { getGameDetailsByName } from '../utils/selectors';
import gamesObj from '../datas/games.json';
import Paper from '../components/Paper';
import DetailContent from '../components/DetailContent';
import NotFoundScreen from './NotFoundScreen';
import withI18n from '../contexts/withI18n';
import { media } from '../utils/styleUtils';

const { games } = gamesObj;

const Media = styled.div``;
const Img = styled.img`
  width: 100%;
  height: 368px;
  background: url(${props => props.desktopSrc});
  background-repeat: no-repeat;
  ${media.phone`
    background: url(${props => props.mobileSrc});
    background-repeat: no-repeat;
    background-position:center;
  `}
  background-position:center;
`;
const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 368px;
  box-shadow: inset 0px -16px 16px rgba(0, 0, 0, 0.25);
  top: 64px;
  left: 0;
`;
const DetailSection = styled.section``;

const GameDetailsScreen = (props) => {
  const { gameName } = props.match.params;
  const gameDetails = getGameDetailsByName(games, gameName);
  return (
    <Fragment>
      {gameDetails ? (
        <Fragment>
          <Header text={props.i18n._('detail.header.title')} />
          <Media>
            <Img desktopSrc={gameDetails.hero} mobileSrc={gameDetails.cover} />
            <Shadow />
          </Media>
          <DetailSection>
            <Paper>
              <DetailContent
                title={gameDetails.name}
                subTitle={gameDetails.platform}
                content={gameDetails.description}
              />
            </Paper>
          </DetailSection>
        </Fragment>
      ) : (
        <NotFoundScreen />
      )}
    </Fragment>
  );
};

GameDetailsScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      gameName: PropTypes.string.isRequired
    })
  }).isRequired,
  i18n: PropTypes.object.isRequired
};

export default withI18n(GameDetailsScreen);
