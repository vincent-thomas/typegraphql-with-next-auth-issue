import type { NextPage } from "next";
import { gplQueries } from "@graphql/client";
import { useQuery } from "@tanstack/react-query";

const Home: NextPage = () => {
  const data = useQuery(["getUsers"], () => gplQueries.getUsers());

  return <div className="p-10">{JSON.stringify(data)}</div>;
};

export default Home;
