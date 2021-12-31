import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Record } from "../entity";
import { CreateRecordInput } from "../utils/inputs";

@Resolver()
export class RecordResolver {
  @Query(() => String)
  ping() {
    return "pong!";
  }

  @Query(() => [Record])
  async records(): Promise<Record[]> {
    const records = await Record.find();
    return records;
  }

  @Mutation(() => Boolean)
  async saveRecords(
    @Arg("records", () => [CreateRecordInput]) records: CreateRecordInput[]
  ): Promise<boolean> {
    if (records.length == 0) return false;
    try {
      for (let record of records) {
        const rec = new Record();
        rec.icon = record.icon;
        rec.label = record.label;
        rec.unit = record.unit;
        rec.value = record.value;
        rec.local_id = record.id;
        rec.created_at = record.created_at;
        await rec.save();
      }
      return true;
    } catch (e) {
      console.log("Something went wrong trying to create records ! \n e : ", e);
      return false;
    }
  }
}
