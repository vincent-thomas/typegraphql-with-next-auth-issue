import type { NextPage } from "next";
import { getDog } from "@graphql/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const {
    query: { dog }
  }: any = useRouter();
  const data = useQuery(
    ["getDog"],
    () =>
      getDog({
        id: +dog
      }),
    {
      enabled: !!dog
    }
  );

  return <div className="p-10">{JSON.stringify(data)}</div>;
};

export default Home;
