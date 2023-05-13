import { createGlobalStyle } from "styled-components";
import fons from "../../assets/img/bg-stars.jpeg";

export const GlobalStyles = createGlobalStyle`

html {
  font-size: ${({ theme }) => theme.fontSizeGeneral};
}

body {
  font-family: "Jura", sans-serif;
  background-image: url(${fons});
  color: ${({ theme }) => theme.colors.lletraGlobal};
}
`;
