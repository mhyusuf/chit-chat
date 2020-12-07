import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBothSetsStudentsByCourse } from "../../actions";
import StudentPreview from "../../components/StudentPreview";
import {
  Course,
  CourseState,
  Student,
  StudentUser,
  User,
} from "../../interfaces/reducerInterfaces";

import "./Students.scss";

interface StudentsProps {
  user: User;
  courses: Course[];
  activeCourse: number;
  students: Student[];
  getBothSetsStudentsByCourse: Function;
}

const Students: FunctionComponent<StudentsProps> = ({
  user,
  students,
  courses,
  activeCourse,
  getBothSetsStudentsByCourse,
}) => {
  const [studentsToMap, setStudentsToMap] = useState<Student[]>([]);

  useEffect(() => {
    getBothSetsStudentsByCourse(activeCourse);

    const studentSelf = user.isTeacher
      ? null
      : students.filter((student) => user.userId !== student.userId);
    const targetRoom =
      studentSelf && studentSelf[0] ? studentSelf[0].RoomId : 0;

    setStudentsToMap(
      user.isTeacher
        ? students.filter((student) => student.CourseId === activeCourse)
        : students.filter((student) => student.RoomId === +targetRoom)
    );
  }, [activeCourse]);

  return (
    <div className="students-grand-wrapper">
      <h1>Students: Class 7e</h1>
      <div className="students-grand-wrapper__students-container">
        <div className="students-grand-wrapper__students-container__students-container-wrapper">
          {studentsToMap.length ? (
            studentsToMap.map((student) => {
              return <StudentPreview student={student} key={student.id} />;
            })
          ) : (
            <p>There are no students in this course</p>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  user,
  course,
  students,
}: {
  user: User;
  course: CourseState;
  students: Student[];
}) => {
  return {
    user: user,
    courses: course.courseList,
    activeCourse: course.activeCourse,
    students,
  };
};

export default connect(mapStateToProps, { getBothSetsStudentsByCourse })(
  Students
);
