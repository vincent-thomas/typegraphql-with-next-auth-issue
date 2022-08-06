import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-micro";
import { NextApiHandler } from "next";
import { DogResolver } from "@backend/resolvers/dog";

export const config = {
  api: {
    bodyParser: false,
  },
};

const schema = await buildSchema({
  resolvers: [DogResolver],
});

const server = new ApolloServer({
  schema,
});

const startServer = server.start();

const handler: NextApiHandler = async (req, res) => {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
};

export default handler;
