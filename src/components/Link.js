import React from 'react';
import styled from 'styled-components';
import { themeColors, colorPalettes } from '../utils/styleUtils';

const Wrapper = styled.div`
  display: inline-block;
  outline: none;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover span,
  &:active span{
    transform: translateY(-100%);
    color: ${themeColors.link};
  }
`
const Content = styled.span`
  display: inline-block;
  position: relative;
  transition: transform 0.3s;
  color: ${props => props.textColor || colorPalettes.black};

  &::before {
    position: absolute;
    content: attr(data-hover);
    top: 100%;
    transform: translate3d(0,0,0);
  }
`
const Link = (props) => {
  return (
    <Wrapper onClick={() => props.handleClick()}>
      <Content
        data-hover={props.text}
        textColor={props.textColor}
      >
        {props.text}
      </Content>
    </Wrapper>
  )
}

export default Link;