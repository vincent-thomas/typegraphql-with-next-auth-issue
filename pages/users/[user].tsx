import type { NextPage } from "next";
import { gplQueries } from "@graphql/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const {
    query: { user }
  }: any = useRouter();
  const data = useQuery(
    ["getDog"],
    () =>
      gplQueries.getUser({
        id: +user
      }),
    {
      enabled: !!user
    }
  );

  return <div className="p-10">{JSON.stringify(data)}</div>;
};

export default Home;
