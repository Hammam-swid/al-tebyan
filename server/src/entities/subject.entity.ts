import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { Classroom } from "./classroom.entity.js";
import { Teacher } from "./teacher.entity.js";
import { Grade } from "./grade.entity.js";

@Entity()
export class Subject {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  subjectName: string;

  @ManyToOne((type) => Classroom, (classroom) => classroom.subjects)
  classroom: Relation<Classroom>;

  @ManyToOne(() => Teacher, (teacher) => teacher.subject)
  teacher: Relation<Teacher>;

  @OneToMany(() => Grade, (grade) => grade.subject)
  grades: Grade[];
}
