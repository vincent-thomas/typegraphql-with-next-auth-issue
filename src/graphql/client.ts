import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";

import { getSdk } from "@graphql/client";

const gplClient = new GraphQLClient("http://localhost:3000/api/graphql");
export const { getDogs } = getSdk(gplClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  }
});
