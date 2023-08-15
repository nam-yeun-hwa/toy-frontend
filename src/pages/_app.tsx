import GlobalStyle from "@/styles/global";
import "@/styles/globals.css";
import globalTheme from "@/styles/globalTheme";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
