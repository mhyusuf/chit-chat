import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";

import { getCoursesByTeacher, setActiveCourse } from "../../actions";
import { Course, CourseState, User } from "../../interfaces/reducerInterfaces";

import "./ActiveCourse.scss";

interface ActiveCourseProps {
  course: CourseState;
  teacherId: string;
  getCoursesByTeacher: (id: string) => void;
  setActiveCourse: (course: Course) => void;
}

const ActiveCourse: FunctionComponent<ActiveCourseProps> = ({
  course,
  teacherId,
  getCoursesByTeacher,
  setActiveCourse,
}) => {
  useEffect(() => {
    getCoursesByTeacher(teacherId);
  }, []);

  return (
    <div>
      <select>
        {course.courseList.map((course) => (
          <option>{course.name}</option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = ({
  course,
  user,
}: {
  course: CourseState;
  user: User;
}) => {
  return { course, teacherId: user.id };
};

export default connect(mapStateToProps, {
  getCoursesByTeacher,
  setActiveCourse,
})(ActiveCourse);
