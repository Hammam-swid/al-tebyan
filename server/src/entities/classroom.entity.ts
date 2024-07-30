import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Student } from "./student.entity.js";
import { SubjectClassroom } from "./subjectClassroom.entity.js";

@Entity()
export class Classroom {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  className: string;

  @OneToMany(() => Student, (student) => student.classroom)
  students: Student[];

  @OneToMany((type) => SubjectClassroom, (subClass) => subClass.classroom)
  subjects: SubjectClassroom[];
  // @ManyToMany(() => Subject, (subject) => subject.classrooms)
  // @JoinTable()
  // subjects: Subject[];

  // @ManyToMany(() => Teacher, (teacher) => teacher.classrooms)
  // teachers: Teacher[];
}
