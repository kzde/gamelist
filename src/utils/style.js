import { css } from 'styled-components';

export const colorPalettes = {
  black: '#333333',
  white: '#FFFFFF',
  red: '#FE6050',
  lightGrey: '#E5E5E5'
};

export const themeColors = {
  default: colorPalettes.black,
  selected: colorPalettes.red,
  link: colorPalettes.red,
  borderGrey: '#C4C4C4'
};

export const textSizes = {
  smallText: '14px',
  normalText: '18px',
  titleText: '24px'
};

export const margins = {
  small: '8px',
  medium: '16px',
  large: '32px'
};

export const headerHeight = '64px';
export const basicMargin = 16;
export const cardSize = {
  width: '328px',
  height: '492px',
  phoneWidth: '359px'
};

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 576
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
