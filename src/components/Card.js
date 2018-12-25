import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import { margins, cardSize, colorPalettes, textSizes, themeColors } from '../utils/styleUtils';

const Wrapper = styled.div`
  width: 100%;
  height: ${cardSize.height};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
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
`
const Title = styled.div`
  font-size: ${textSizes.normalText};
  cursor: pointer;
  &:hover {
      color: ${themeColors.link}
    }
`
const SubTitle = styled.div`
margin-top: ${margins.small};
font-size: ${textSizes.smallText};
font-weight: 300;
`;

const Card = (props) => {
  const navTo = () => {
    props.history.push(`/${props.title}`)
  }

  return (
    <Wrapper>
      <Img src={props.cover} />
      <Content>
        <Title onClick={navTo}>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
      </Content>
    </Wrapper>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export const card = Card;
export default withRouter(Card);