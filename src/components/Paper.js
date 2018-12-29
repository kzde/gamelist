import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colorPalettes, themeColors, media, margins
} from '../utils/styleUtils';

const Wrapper = styled.div`
  background: ${colorPalettes.white};
  border: 1px solid ${themeColors.borderGrey};
  padding: 64px 84px;
  margin: 64px 136px 89px 136px;

  ${media.desktop`
    padding: ${margins.large};
    margin: ${margins.large}
  `}
  ${media.tablet`
    padding: ${margins.large} ${margins.medium};
    margin: ${margins.large}
  `}
  ${media.phone`
    padding: ${margins.large} ${margins.medium};
    margin: ${margins.small}
  `}
  
`;

const Paper = ({ children }) => <Wrapper>{children}</Wrapper>;

Paper.propTypes = {
  children: PropTypes.element.isRequired
};
export default Paper;
