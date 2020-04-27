import { theme as chakraTheme } from "@chakra-ui/core";

export const customTheme = {
  ...chakraTheme,
  fonts: {
    heading: "Arvo",
    body: "Arvo",
    mono: "Arvo",
  },
  fontWeights: {
    ...chakraTheme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
};
