import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-micro";

import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { NextApiHandler } from "next";
import { DogResolver } from "@backend/resolvers/dog/resolver";
import { UserResolver } from "@backend/resolvers/user/resolver";

export const config = {
  api: {
    bodyParser: false
  }
};

const schema = await buildSchema({
  resolvers: [DogResolver, UserResolver]
});

const server = new ApolloServer({
  schema,
  persistedQueries: false,
  allowBatchedHttpRequests: true,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({ endpoint: "/api/graphql" })
  ],
  context: ({ req, res }) => ({ req, res })
});

const startServer = server.start();

const handler: NextApiHandler = async (req, res) => {
  await startServer;
  console.log(schema);

  await server.createHandler({ path: "/api/graphql" })(req, res);
};

export default handler;
