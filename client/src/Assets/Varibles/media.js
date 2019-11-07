import { css } from "styled-components";

export const sizes = {
  large: 1300,
  desktop: 992,
  tablet: 767,
  phone: 700
};

// Iterate through the sizes and create a media template
const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default Media;
