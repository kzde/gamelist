import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  themeColors, margins, colorPalettes, textSizes
} from '../utils/style';

const Wrapper = styled.div`
  padding: ${margins.medium};
  background: ${colorPalettes.lightGrey};
`;
const lightenBlack = css`rgba(0,0,0,0.2)`;
const lightenRed = css`rgba(255,0,0,0.6)`;
const LabelWrapper = styled.div`
  color: ${props => (props.selected ? lightenRed : lightenBlack)};
  display: inline-block;
  cursor: pointer;
  & + div {
    margin-left: 12px;
  }
  &::before {
    color: ${props => (props.selected ? themeColors.selected : themeColors.default)};
    content: attr(data-hover);
    font-size: ${textSizes.normalText};
    line-height: 37px;
    position: absolute;
    transition: transform 0.3s, opacity 0.3s;
  }
  &:hover::before {
    transform: scale(0.9);
    opacity: 0;
  }
`;
const Label = styled.span`
  line-height: 37px;
  text-align: center;
  font-size: ${textSizes.normalText};
`;

const PlatformChoices = props => (
  <Wrapper>
    {props.choices.map((choice, index) => (
      <LabelWrapper data-test={`platform-${choice}`}
        onClick={() => props.handleClick(choice)}
        selected={props.selectedPlatform === choice}
        key={index}
        data-hover={choice}
      >
        <Label>{choice}</Label>
      </LabelWrapper>
    ))}
  </Wrapper>
);

PlatformChoices.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  selectedPlatform: PropTypes.string.isRequired
};

export default PlatformChoices;
