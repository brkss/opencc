import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity("records")
export class Record extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ unique: true })
  local_id: string;

  @Field()
  @Column()
  label: string;

  @Field()
  @Column()
  icon: string;

  @Field()
  @Column()
  unit: string;

  @Field()
  @Column()
  value: number;

  @Field()
  @Column()
  created_at: Date;
}
