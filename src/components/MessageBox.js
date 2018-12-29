import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorPalettes } from '../utils/styleUtils';

const Wrapper = styled.div`
  background: ${colorPalettes.white};
  position: absolute;
  top: 50%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 50%;
  border-radius: 8px;
  opacity: 0.6;
`;
const Content = styled.p`
  text-align: center;
  padding: 10px 0;
`;

const MessageBox = ({ content }) => (
  <Wrapper>
    <Content>{content}</Content>
  </Wrapper>
);

MessageBox.propTypes = {
  content: PropTypes.string.isRequired
};
export default MessageBox;
