import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  margins, cardSize, colorPalettes, textSizes, themeColors
} from '../utils/styleUtils';
import ClickableText from './ClickableText';

const Wrapper = styled.div`
  width: ${props => props.width || '100%'};
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

const Card = (props) => {
  const navTo = () => {
    props.history.push(`/${props.title}`);
  };

  return (
    <Wrapper width={props.width} onClick={navTo}>
      <Img src={props.cover} />
      <Content>
        <Title>
          <ClickableText text={props.title} handleClick={navTo} textColor={themeColors.link} />
        </Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </Content>
    </Wrapper>
  );
};

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  width: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export const card = Card;
export default withRouter(Card);
