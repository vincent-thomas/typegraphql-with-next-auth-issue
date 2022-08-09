import { NextApiRequest, NextApiResponse } from "next";

export interface IGraphqlContext {
  req: NextApiRequest;
  res: NextApiResponse;
}
