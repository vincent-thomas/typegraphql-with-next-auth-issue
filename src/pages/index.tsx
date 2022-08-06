import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import { getDogs } from "src/graphql/client";
import { useQuery } from "@tanstack/react-query";

const Home: NextPage = () => {
  const data = useQuery(["getDogs"], () => getDogs());

  return <>{JSON.stringify(data?.data)}</>;
};

export default Home;
