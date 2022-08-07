import { Query, Resolver, Arg } from "type-graphql";

import type { Maybe } from "type-graphql";
import { UserObject } from "./object";

const users: UserObject[] = [
  {
    id: 1,
    age: 43,
    name: "david",
    gender: "male"
  },
  {
    id: 2,
    age: 55,
    name: "robert",
    gender: "male"
  }
];

@Resolver(UserObject)
export class UserResolver {
  @Query(() => [UserObject])
  users(): UserObject[] {
    return users;
  }

  @Query(() => UserObject, { nullable: true })
  user(@Arg("id") id: number): Maybe<UserObject> {
    return users.find(v => v.id === id) || null;
  }
}
