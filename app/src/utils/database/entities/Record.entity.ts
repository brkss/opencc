import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("records")
export class Record {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  value: string;

  @Column()
  label: string;

  @Column()
  syncd: boolean;

  @CreateDateColumn()
  created_at: Date;
}
