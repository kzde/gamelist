import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeColors, margins, colorPalettes, textSizes } from '../utils/styleUtils';

const Wrapper = styled.div`
  padding: ${margins.medium};
  background: ${colorPalettes.lightGrey};
`
const Label = styled.span`
  line-height: 37px;
  text-align: center;
  font-size: ${textSizes.normalText};
  cursor: pointer;
  &+span {
    margin-left: 12px;
  };
  color: ${props => props.selected ? `${themeColors.selected}` : `${themeColors.default}`};
`;

const PlatformChoices = (props) => (
  <Wrapper>
    {props.choices.map((choice, index) =>
      (
        <Label
          key={index}
          onClick={() => props.handleClick(choice)}
          selected={props.selectedPlatform === choice}
        >{choice}
        </Label>
      )
    )}
  </Wrapper>
)

PlatformChoices.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  selectedPlatform: PropTypes.string.isRequired
}

export default PlatformChoices;