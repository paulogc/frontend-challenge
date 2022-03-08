import { createGlobalStyle, css } from "styled-components";
import { fontWeights } from "app/theme/default";

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    @font-face {
      font-family: "graphik";
      src: url("/public/fonts/Graphik-Light-Web") format("woff2");
      font-weight: ${fontWeights.regular};
      font-style: normal;
    }

    @font-face {
      font-family: "graphik";
      src: url("/public/fonts/Graphik-Regular-Web") format("woff2");
      font-weight: ${fontWeights.medium};
      font-style: medium;
    }

    @font-face {
      font-family: "graphik";
      src: url("/public/fonts/Graphik-Medium-Web") format("woff2");
      font-weight: ${fontWeights.bold};
      font-style: bold;
    }
  `
);
