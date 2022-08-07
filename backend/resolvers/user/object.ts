import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
export class UserObject {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  age: number;

  @Field(() => String)
  gender: "male" | "female";
}
