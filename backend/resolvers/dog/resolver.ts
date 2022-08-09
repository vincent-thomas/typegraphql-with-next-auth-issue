import { DogObject } from "@backend/resolvers/dog/object";
import { Query, Resolver, Arg, Ctx } from "type-graphql";

import type { Maybe } from "type-graphql";
import type { IGraphqlContext } from "interfaces/graphql-context";
import { unstable_getServerSession } from "next-auth";
import { NextAuthConfig } from "config/next-auth";
import { getToken } from "next-auth/jwt";

const dogs: DogObject[] = [
  {
    id: 1,
    age: 15,
    name: "testing",
    gender: "female"
  },
  {
    id: 2,
    age: 3,
    name: "test2",
    gender: "male"
  }
];

@Resolver(DogObject)
export class DogResolver {
  @Query(() => [DogObject])
  async dogs(@Ctx() { req }: IGraphqlContext): Promise<DogObject[]> {
    const user = await getToken({ req });
    console.log("USER", user);
    return dogs;
  }

  @Query(() => DogObject, { nullable: true })
  dog(@Arg("id") id: number): Maybe<DogObject> {
    return dogs.find(v => v.id === id) || null;
  }
}
