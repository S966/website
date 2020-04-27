import { useColorMode, CSSReset } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";

export const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#2D3748"};
          }
        `}
      />
      {children}
    </>
  );
};
