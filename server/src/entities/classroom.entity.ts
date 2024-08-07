import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Student } from "./student.entity.js";
import { Subject } from "./subject.entity.js";

@Entity()
export class Classroom {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  className: string;

  @OneToMany(() => Student, (student) => student.classroom)
  students: Student[];

  @OneToMany((type) => Subject, (subject) => subject.classroom)
  subjects: Subject[];
}
