import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Classroom } from "./classroom.entity.js";

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
  isPaid: boolean;

  @ManyToOne(() => Classroom, (classroom) => classroom.students)
  classroom: Classroom;
}
