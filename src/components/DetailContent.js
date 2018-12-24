import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textSizes, margins } from '../utils/styleUtils';

const Article = styled.article`
  padding: 64px 84px;
  font-size: ${textSizes.normalText};
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.span`
  font-size: ${textSizes.titleText};
  font-weight: bold;
`
const Content = styled.div`
  margin: ${margins.large} 0;
  text-align: left;
  line-height: 25px;
`
const DetailContent = (props) => (
  <Article>
    <Header>
      <Title>{props.title}</Title>
      <span>{props.subTitle}</span>
    </Header>
    <Content>{props.content}</Content>
  </Article>
)

DetailContent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string.isRequired
};
DetailContent.defaultProps = {
  subTitle: ''
};

export default DetailContent;