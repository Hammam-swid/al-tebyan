import {
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from "typeorm";
import { Teacher } from "./teacher.entity.js";
import { Subject } from "./subject.entity.js";
import { Classroom } from "./classroom.entity.js";

@Entity()
export class SubjectClassroom {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.subjectClasses)
  teacher: Teacher;

  @ManyToOne(() => Subject, (subject) => subject.subjectClassroom)
  subject: Subject;
  @ManyToOne(() => Classroom, (classroom) => classroom.subjects)
  classroom: Relation<Classroom>;
}
