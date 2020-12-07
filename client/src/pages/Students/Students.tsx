import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBothSetsStudentsByCourse } from "../../actions";
import StudentPreview from "../../components/StudentPreview";
import {
  Course,
  CourseState,
  Student,
  User,
} from "../../interfaces/reducerInterfaces";

import "./Students.scss";

const mocks = [
  { name: "Dave", id: "1" },
  { name: "David", id: "2" },
  { name: "David D", id: "3" },
  { name: "Davey D", id: "4" },
  { name: "Brian", id: "5" },
  { name: "Dora", id: "6" },
  { name: "The", id: "7" },
  { name: "Explorer", id: "8" },
  { name: "Explorer", id: "9" },
  { name: "Dave", id: "10" },
  { name: "David", id: "11" },
  { name: "David D", id: "13" },
  { name: "Davey D", id: "14" },
  { name: "Brian", id: "15" },
  { name: "Dora", id: "16" },
  { name: "The", id: "17" },
  { name: "Explorer", id: "18" },
  { name: "Explorer", id: "19" },
  { name: "Dave", id: "21" },
  { name: "David", id: "22" },
  { name: "David D", id: "23" },
  { name: "Davey D", id: "24" },
  { name: "Brian", id: "25" },
  { name: "Dora", id: "26" },
  { name: "The", id: "27" },
  { name: "Explorer", id: "28" },
  { name: "Explorer", id: "29" },
];

interface StudentsProps {
  user: User;
  courses: Course[];
  activeCourse: string;
  students: Student[];
  getBothSetsStudentsByCourse: (id: string) => {};
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
    const targetRoom = studentSelf ? studentSelf[0].RoomId : "0";

    setStudentsToMap(
      user.isTeacher
        ? students.filter((student) => student.CourseId === +activeCourse)
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
