import { Field, ObjectType, ID, Int } from "type-graphql";

@ObjectType()
export class DogObject {
  @Field(() => ID)
  name: string;

  @Field(() => Int)
  age: number;
}
