import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Classroom } from "./classroom.entity.js";
import { Grade } from "./grade.entity.js";

@Entity()
export class Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  firstName: string;

  @Column("varchar")
  lastName: string;

  @Column()
  state: string;

  @Column({ length: 12 })
  phoneNo: string;

  @Column()
  private password: string;

  @Column()
  passwordChangedAt: Date;

  @Column()
  isPaid: boolean;

  @ManyToOne(() => Classroom, (classroom) => classroom.students)
  classroom: Classroom;

  @OneToMany(() => Grade, (grade) => grade.student)
  grades: Grade[];

  setPassword(password) {
    this.password = password;
  }
}
