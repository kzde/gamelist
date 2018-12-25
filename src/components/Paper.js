import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorPalettes, themeColors } from '../utils/styleUtils';

const Wrapper = styled.div`
  background: ${colorPalettes.white};
  border: 1px solid ${themeColors.borderGrey};
`;

const Paper = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

Paper.propTypes = {
  children: PropTypes.element.isRequired
};
export default Paper;