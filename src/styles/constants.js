import { rem } from 'polished';

export const DEFAULT_THEME = {
  color: {
    bg: '#121212',
    bgLow: '#1C1E23',
    bgMedium: '#282A31',
    bgHigh: '#3F424D',
    txtLow: '#434343',
    txtMedium: '#A2A2A2',
    txtHigh: '#F0F0F0',
  },
  spacing: {
    xxs: rem(4),
    xs: rem(8),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(40),
    xxl: rem(80),
    huge: rem(160),
  },
  fontSize: {
    xs: rem(14),
    sm: rem(16),
    md: rem(24),
    lg: rem(32),
    xl: rem(80),
  },
  lineHeight: {
    xs: '140%',
    sm: '130%',
    md: '120%',
    lg: '115%',
    xl: '110%',
  },
  fontFamily: {
    primary: "'Poppins', sans-serif",
    secondary: "'Roboto', sans-serif",
  },
  borderRadius: {
    xxs: rem(4),
    xs: rem(8),
    sm: rem(16),
  },
  boxShadow: {
    l0: 'inset 0px 4px 4px rgba(28, 30, 35, 0.7)',
    l1: '0px 4px 8px rgba(63, 66, 77, 0.25)',
    l2: '0px 8px 24px rgba(40, 42, 49, 0.25)',
    l3: '0px 16px 32px rgba(63, 66, 77, 0.25)',
    l4: '0px 16px 48px rgba(63, 66, 77, 0.25)',
  },
};
