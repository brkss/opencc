import { Column, Entity, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("records")
export class Record extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  local_id: string;

  @Column()
  label: string;

  @Column()
  icon: string;

  @Column()
  unit: string;

  @Column()
  value: number;

  @Column()
  created_at: Date;
}
