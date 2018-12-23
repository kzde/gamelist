import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { getGameDetailsByName } from '../utils/selectors';


const Img = styled.img`
  width: 1440px;
  height: 368px;
`;
const Shadow = styled.div`
  position: absolute;
  width: 1440px;
  height: 368px;
  box-shadow: inset 0px -16px 16px rgba(0, 0, 0, 0.25);
  top: 64px;
  left: 0;
`

const DetailsScreen = (props) => {
  const details = getGameDetailsByName(props.match.params.gameName);
  return (
    <Fragment>
      <Header text="Game details" />
      <Img src={details.hero} />
      <Shadow />
      
    </Fragment>
  )
}



export default DetailsScreen;