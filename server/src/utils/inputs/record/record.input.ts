import { InputType, Field } from "type-graphql";

@InputType()
export class CreateRecordInput {
  @Field()
  id: string;

  @Field()
  label: string;

  @Field()
  icon: string;

  @Field()
  unit: string;

  @Field()
  value: number;

  @Field()
  created_at: Date;
}
