import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { gplQueries } from "@graphql/client";
import { unstable_getServerSession } from "next-auth";
import { NextAuthConfig } from "config/next-auth";

export default function Test() {
  const { data } = useQuery(["getDogs"], () => gplQueries.getDogs());

  return (
    <>
      {JSON.stringify(data)}

      <Link href="/1">goto 1</Link>
    </>
  );
}

export async function getServerSideSession(context: any) {
  const user = await unstable_getServerSession(
    context.req,
    context.res,
    NextAuthConfig
  );
}
