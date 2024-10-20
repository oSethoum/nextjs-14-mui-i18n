"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#002c39",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
