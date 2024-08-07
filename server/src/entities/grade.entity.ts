import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { Student } from "./student.entity.js";
import { Subject } from "./subject.entity.js";

@Entity()
export class Grade {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("double")
  value: number;

  @ManyToOne(() => Student, (student) => student.grades)
  student: Relation<Student>;

  @ManyToOne(() => Subject, (subject) => subject.grades)
  subject: Relation<Subject>;
}
