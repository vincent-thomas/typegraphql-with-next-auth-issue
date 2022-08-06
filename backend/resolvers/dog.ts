import { DogObject } from "backend/objects/dog";
import { Query, Resolver } from "type-graphql";

@Resolver(DogObject)
export class DogResolver {
  @Query(() => DogObject)
  dogs(): DogObject {
    return { name: "sally", age: 15 };
  }
}
