import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Subject } from "./subject.entity.js";

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ length: 12 })
  phoneNo: string;

  @OneToMany(() => Subject, (subject) => subject.teacher)
  subject: Subject[];
}
