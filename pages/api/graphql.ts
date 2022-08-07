import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-micro";
import { NextApiHandler } from "next";
import { DogResolver } from "@backend/resolvers/dog/resolver";
import { UserResolver } from "@backend/resolvers/user/resolver";

export const config = {
  api: {
    bodyParser: false
  }
};

const server = new ApolloServer({
  schema: await buildSchema({
    resolvers: [DogResolver, UserResolver]
  }),
  persistedQueries: false,
  allowBatchedHttpRequests: true
});

const startServer = server.start();

const handler: NextApiHandler = async (req, res) => {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
};

export default handler;
