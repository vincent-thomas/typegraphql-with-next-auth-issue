import { Field, ObjectType, Float, Int } from "type-graphql";

@ObjectType()
export class DogObject {
  @Field(() => Float)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  age: number;
}
