import React from 'react';
import styled from 'styled-components';
import { basicMargin, colorPalettes } from '../utils/styleUtils';

const Wrapper = styled.div`
  width: 328px;
  height: 492px;
  display:flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 328px;
  height: 411px;
`;
const Content = styled.div`
  height: 81px;
  background: ${colorPalettes.white};
  padding: ${basicMargin};
`
const Title = styled.div`
  font-size: 18px;
`
const SubTitle = styled.div`
margin-top: 8px;
font-size: 14px;
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