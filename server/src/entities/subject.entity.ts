import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Classroom } from "./classroom.entity.js";
import { Teacher } from "./teacher.entity.js";
import { SubjectClassroom } from "./subjectClassroom.entity.js";

@Entity()
export class Subject {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  subjectName: string;

  @OneToMany(() => SubjectClassroom, subClass => subClass.subject)
  subjectClassroom : SubjectClassroom[]

  // @ManyToMany(() => Classroom, (classroom) => classroom.subjects)
  // classrooms: Classroom[];

  // @ManyToMany(() => Teacher, (teacher) => teacher.subjects)
  // @JoinTable()
  // teachers: Teacher[];
}
