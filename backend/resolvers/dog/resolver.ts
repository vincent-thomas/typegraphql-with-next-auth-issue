import { DogObject } from "@backend/resolvers/dog/object";
import { Query, Resolver, Arg, UseMiddleware } from "type-graphql";

import type { Maybe } from "type-graphql";

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
  dogs(): DogObject[] {
    return dogs;
  }

  @Query(() => DogObject, { nullable: true })
  dog(@Arg("id") id: number): Maybe<DogObject> {
    return dogs.find(v => v.id === id) || null;
  }
}
