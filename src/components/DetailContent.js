import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textSizes, margins, media } from '../utils/style';

const Article = styled.article`
  font-size: ${textSizes.normalText};
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column;
    align-items: flex-start;
    span+span {
      margin-top: ${margins.medium}
    }
  `}
`;
const Title = styled.span`
  font-size: ${textSizes.titleText};
  font-weight: bold;
`;
const Content = styled.div`
  margin: ${margins.large} 0;
  text-align: left;
  line-height: 25px;
`;
const DetailContent = ({ title, subTitle, content }) => (
  <Article>
    <Header>
      <Title data-test="detail-article-title">{title}</Title>
      <span data-test="detail-article-subtitle">{subTitle}</span>
    </Header>
    <Content>{content}</Content>
  </Article>
);

DetailContent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  content: PropTypes.string.isRequired
};
DetailContent.defaultProps = {
  subTitle: ''
};

export default DetailContent;
