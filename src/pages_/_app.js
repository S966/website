import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import { customTheme } from "../utils/theme";
import { GlobalStyle } from "../utils/theme/globalStyle";

import "../../public/styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider value="light">
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
