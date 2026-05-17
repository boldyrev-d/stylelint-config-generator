import { css, type RuleSet } from 'styled-components';

type CssArgs = Parameters<typeof css>;
type MediaHelper = (...args: CssArgs) => RuleSet<object>;

export const media: Record<'mobile' | 'tablet' | 'desktop', MediaHelper> = {
  mobile: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `,

  tablet: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)};
    }
  `,

  desktop: (...args) => css`
    @media (max-width: 1170px) {
      ${css(...args)};
    }
  `,
};
