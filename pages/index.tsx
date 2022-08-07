import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { gplQueries } from "@graphql/client";

export default function Test() {
  const { data } = useQuery(["getDogs"], () => gplQueries.getDogs());

  return (
    <>
      {JSON.stringify(data)}

      <Link href="/1">goto 1</Link>
    </>
  );
}
