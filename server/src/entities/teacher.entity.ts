import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Classroom } from "./classroom.entity.js";
import { Subject } from "./subject.entity.js";
import { SubjectClassroom } from "./subjectClassroom.entity.js";

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

  @OneToMany(() => SubjectClassroom, (subject) => subject.teacher)
  subjectClasses: SubjectClassroom[];

  // @ManyToMany(() => Classroom, (classroom) => classroom.teachers)
  // @JoinTable()
  // classrooms: Classroom[];

  // @ManyToMany(() => Subject, (subject) => subject.teachers)
  // subjects: Subject[];
}
