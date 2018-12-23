import React from 'react';
import styled from 'styled-components';
import { themeColor, margins, colorPalettes, textSizes } from '../utils/styleUtils';

const Wrapper = styled.div`
  padding: ${margins.medium};
  background: ${colorPalettes.lightGrey}
`
const Label = styled.span`
  line-height: 37px;
  text-align: center;
  font-size: ${textSizes.normalText};
  &+span {
    margin-left: 12px;
  }
  color: ${props => props.selected ? `${themeColor.selected}` : `${themeColor.default}`}
`;

const PlatformChoices = (props) => {
  return (
    <Wrapper>
      {props.choices.map((choice, index) => {
        return (
          <Label
            key={`${choice}${index}`}
            onClick={() => props.handleClick(choice)}
            selected={props.selectedPlatForm === choice}
          >
            {choice}
          </Label>
        )
      })}
    </Wrapper>
  )
}

export default PlatformChoices;