import { DataTypes } from "sequelize";
import { connection } from "../../db/sequelize.js"


import { Student } from "./student.model.js";
import { Course } from "./course.model.js";


export const StudentCourse = connection.define(
  "StudentCourse",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);


Student.belongsToMany(Course, {
    through: StudentCourse,
});

Course.belongsToMany(Student, {
    through: StudentCourse,
});