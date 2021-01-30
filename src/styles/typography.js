import { css } from 'styled-components';
import media from 'styled-media-query';

import { DEFAULT_THEME as theme } from 'styles/constants';

export const Title = css`
  & {
    color: ${theme.color.txtMedium};
    font-size: 3.4rem;
    line-height: 1.1em;

    ${media.greaterThan('medium')`
      font-size: 4.2rem;
    `}
  }
`;

export const Subtitle1 = css`
  & {
    color: ${theme.color.txtLow};
    font-size: 2.1rem;
    letter-spacing: -0.45px;
    line-height: 1.5em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  }
`;

export const Subtitle2 = css`
  & {
    color: ${theme.color.txtLow};
    font-size: 2rem;
    letter-spacing: -0.04px;
    line-height: 1.3em;
  }
`;

export const Heading1 = css`
  & {
    color: ${theme.color.txtMedium};
    font-size: 2.6rem;
    font-weight: 600;
    letter-spacing: -0.022em;
    line-height: 1.3em;

    ${media.greaterThan('medium')`
      font-size: 3rem;
    `}
  }
`;

export const Heading2 = css`
  & {
    color: ${theme.color.txtMedium};
    font-size: 2.1rem;
    font-weight: 600;
    letter-spacing: -0.04px;
    line-height: 1.5em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  }
`;

export const Heading3 = css`
  & {
    color: ${theme.color.txtMedium};
    font-size: 2.1rem;
    font-weight: 400;
    letter-spacing: -0.04px;
    line-height: 1.5em;

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
    `}
  }
`;

export const Heading4 = css`
  & {
    color: ${theme.color.txtMedium};
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.04px;
    line-height: 1.5em;
  }
`;

export const Text1 = css`
  & {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.04px;
    line-height: 1.5em;
  }
`;

export const Text2 = css`
  & {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.14px;
    line-height: 1.55em;
  }
`;

export const LinkTransition = css`
  & {
    border-bottom: 2px solid transparent;
    padding-bottom: 0.1rem;
    will-change: border-color;
  }

  &:hover {
    border-color: ${theme.color.txtHigh};
  }
`;

export const Link = css`
  & {
    color: ${theme.color.txtHigh};
    ${LinkTransition}
  }
`;
