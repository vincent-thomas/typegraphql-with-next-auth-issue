import { DogObject } from "backend/objects/dog";
import { Query, Resolver, Arg } from "type-graphql";

import type { Maybe } from "type-graphql";

const dogs: DogObject[] = [
  {
    id: 1,
    age: 15,
    name: "testing"
  },
  {
    id: 2,
    age: 3,
    name: "test"
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
