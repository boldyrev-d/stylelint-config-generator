/* eslint-disable import/prefer-default-export */

import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,

  tablet: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)}
    }
  `,

  desktop: (...args) => css`
    @media (max-width: 1170px) {
      ${css(...args)}
    }
  `,
};
