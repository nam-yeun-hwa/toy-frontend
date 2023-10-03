import GlobalStyle from "@/styles/global";
import "@/styles/globals.css";
import globalTheme from "@/styles/globalTheme";
import { ThemeProvider } from "@emotion/react";
import {
  Hydrate,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";

export const queryErrorHandler = (error) => {
  console.log(error, "app queryErrorHandler");

  // toast(`데이터를 가져오지 못했습니다! ${error.message}`);
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {},
  }),
  defaultOptions: {
    queries: {
      retry: 0,
    },
    mutations: {},
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <ThemeProvider theme={globalTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
