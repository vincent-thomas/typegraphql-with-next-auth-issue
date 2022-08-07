import { Field, ObjectType, Float, Int } from "type-graphql";

@ObjectType()
export class DogObject {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  age: number;

  @Field(() => String)
  gender: "male" | "female";
}
