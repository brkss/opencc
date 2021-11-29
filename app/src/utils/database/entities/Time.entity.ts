import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("times")
export class TimeEntity {
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
