export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

const breakpointWidths = {
  xs: 360,
  sm: 600,
  md: 1024,
  lg: 1400,
  xl: 1920,
};

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
};

export default {
  color: {
    white: "#ffffff",
    black: "#000000",
    darkGray: "#37383a",
    lightGray: "#f5f4f3",
    green: "#478423",
  },
  text: {
    primary: "#008051",
    secondary: "#3f465e",
    while: "#EAEFF4",
  },
  background: {
    primary: "#008051",
    secondary: "#3f465e",
    error: "#d50524",
  },
  breakpoints: {
    xs: `${breakpointWidths.xs}px`,
    sm: `${breakpointWidths.sm}px`,
    md: `${breakpointWidths.md}px`,
    lg: `${breakpointWidths.lg}px`,
    xl: `${breakpointWidths.xl}px`,
    widths: breakpointWidths,
    up: (size: Sizes) => `@media (min-width:${breakpointWidths[size]}px)`,
    down: (size: Sizes) => `@media (max-width:${breakpointWidths[size]}px)`,
  },
  fontWeights,
};
