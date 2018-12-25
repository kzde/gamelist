import React, {Fragment} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import backgroundImg from '../assets/images/rayman-legends.jpg';
import MessageBox from '../components/MessageBox';

const Img = styled.img`
  width: 100%;
`
const NotFoundScreen = () => (
  <Fragment>
    <Header text="Games catalog 404"/>
    <Img src={backgroundImg} />
    <MessageBox content={`Every thing is fine, it's just a new adventure!`}/>
  </Fragment>
)

export default NotFoundScreen;