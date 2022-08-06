import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import "windi.css";
import { queryClient } from "@graphql/client";

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
