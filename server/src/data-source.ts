import "reflect-metadata";
import { config } from "dotenv";

config({ path: "./config.env" });

import { DataSource } from "typeorm";
import { Student } from "./entities/student.entity.js";
import { Classroom } from "./entities/classroom.entity.js";
import { Subject } from "./entities/subject.entity.js";
import { Teacher } from "./entities/teacher.entity.js";
import { SubjectClassroom } from "./entities/subjectClassroom.entity.js";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "test",
  password: process.env.DB_PASSWORD,
  database: "al_tebyan",
  synchronize: true,
  logging: false,
  entities: [Student, Classroom, Subject, Teacher, SubjectClassroom],
  migrations: [],
  subscribers: [],
});
