import React, {Fragment} from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import backgroundImg from '../assets/images/rayman-legends.jpg';
import MessageBox from '../components/MessageBox';
import PropTypes from 'prop-types';
import withI18N from '../contexts/withI18n';


const Img = styled.img`
  width: 100%;
`
const NotFoundScreen = (props) => (
  <Fragment>
    <Header text={`${props.i18n._('catalog.header.title')} 404`} />
    <Img src={backgroundImg} />
    <MessageBox content={`Every thing is fine, it's just a new adventure!`}/>
  </Fragment>
)

NotFoundScreen.propsType = {
  i18n: PropTypes.object.isRequired
}
export const notFoundScreen = NotFoundScreen;
export default withI18N(NotFoundScreen);