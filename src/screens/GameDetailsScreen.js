import React, { Fragment, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import { getGameDetailsByName } from '../utils/selectors';
import Paper from '../components/Paper';
import DetailContent from '../components/DetailContent';
import Loader from '../components/Loader';
import withI18n from '../contexts/withI18n';
import { media, headerHeight, colorPalettes } from '../utils/styleUtils';

const NotFoundScreen = lazy(() => import('./NotFoundScreen'));

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
  top: 0;
  left: 0;
`;
const DetailSection = styled.section``;
const ContentWrapper = styled.div`
  position: absolute;
  top: ${headerHeight};
  left: 0;
  right: 0;
  bottom: 0;
`;

const GameDetailsScreen = (props) => {
  const { gameName } = props.match.params;
  const gameDetails = getGameDetailsByName(props.data, gameName);
  return (
    <Fragment>
      {gameDetails ? (
        <Fragment>
          <Header text={props.i18n._('detail.header.title')} />
          <ContentWrapper>
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
          </ContentWrapper>
        </Fragment>
      ) : (
        <Suspense
          fallback={
            <Loader backgroundColor={colorPalettes.black} size="60px" color={colorPalettes.white} />
          }
        >
          <NotFoundScreen />
        </Suspense>
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
  data: PropTypes.arrayOf(PropTypes.object),
  i18n: PropTypes.object.isRequired
};

export default withI18n(GameDetailsScreen);
