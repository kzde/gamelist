import React from 'react';
import styled from 'styled-components';
import { margins, cardSize, colorPalettes, textSizes } from '../utils/styleUtils';

const Wrapper = styled.div`
  width: ${cardSize.width};
  height: ${cardSize.height};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
`;

const Img = styled.img`
  width: ${cardSize.width};
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
`
const SubTitle = styled.div`
margin-top: ${margins.small};
font-size: ${textSizes.smallText};
font-weight: 300;
`;

const Card = ({ title, cover, platForm }) => {
  return (
    <Wrapper>
      <Img src={cover} />
      <Content>
        <Title>{title}</Title>
        <SubTitle>{platForm}</SubTitle>
      </Content>

    </Wrapper>
  )
}

export default Card;