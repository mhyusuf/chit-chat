import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";

import CourseSelect from "../CourseSelect";
import { getCoursesByTeacher, setActiveCourse } from "../../actions";
import { CourseState, User } from "../../interfaces/reducerInterfaces";

import "./ActiveCourse.scss";

interface ActiveCourseProps {
  course: CourseState;
  teacherId: string;
  getCoursesByTeacher: (id: string) => void;
  setActiveCourse: (course: string) => void;
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
    <div className="course-select-grand-wrapper">
      {course.courseList.length && (
        <CourseSelect
          courses={course.courseList}
          setActiveCourse={setActiveCourse}
        />
      )}
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
