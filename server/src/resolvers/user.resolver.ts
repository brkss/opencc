import { Query } from "type-graphql";

export class UserResolver {
  @Query(() => String)
  ping() {
    return "pong";
  }
}
