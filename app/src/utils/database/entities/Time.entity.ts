import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Time {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  time: Date;

  @CreateDateColumn()
  created_at: Date;
}
