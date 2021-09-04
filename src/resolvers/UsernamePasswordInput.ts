import { Field, InputType } from "type-graphql";

//Different way of doing Args in our Resolver

@InputType()
export class UsernamePasswordInput {
  @Field()
  email: string;
  @Field()
  username: string;
  @Field()
  password: string;
}
