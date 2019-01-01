import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  margins, cardSize, colorPalettes, textSizes, themeColors
} from '../utils/style';
import ClickableText from './ClickableText';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${cardSize.height};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 411px;
  display: block;
`;
const Content = styled.div`
  height: 81px;
  background: ${colorPalettes.white};
  padding: ${margins.medium};
`;
const Title = styled.div`
  font-size: ${textSizes.normalText};
`;
const SubTitle = styled.div`
  margin-top: ${margins.small};
  font-size: ${textSizes.smallText};
  font-weight: 300;
`;

const Card = props => (
  <Wrapper data-test="card"
    onClick={() => props.handleClick(props.title)}
    width={props.width}
  >
    <Img src={props.cover} />
    <Content>
      <Title data-test="card-title">
        <ClickableText
          text={props.title}
          handleClick={() => props.handleClick(props.title)}
          textColor={themeColors.link}
        />
      </Title>
      <SubTitle data-test="card-subtitle">{props.subTitle}</SubTitle>
    </Content>
  </Wrapper>
);

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  width: PropTypes.string,
  handleClick: PropTypes.func
};
Card.defaultProps = {
  width: '100%',
  handleClick: () => {}
};

export default Card;
