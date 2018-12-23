import { css } from 'styled-components';

export const colorPalettes = {
  black: '#333333',
  white: '#FFFFFF',
  red: '#FE6050',
  lightGrey: '#E5E5E5'
}

export const themeColor = {
  default: colorPalettes.black,
  selected: colorPalettes.red
}

export const headerHeight = '64px';
export const basicMargin = '16px';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

