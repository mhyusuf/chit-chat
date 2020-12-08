import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { User, CourseState, Course } from "../../interfaces/reducerInterfaces";
import ActiveCourse from "../ActiveCourse";
import { setActiveCourseDetail } from "../../actions/courseActions";
import translate from "../../utils/translate";
import "./Nav.scss";

interface NavProps {
  isTeacher: boolean;
  activeCourseDetail: Course;
  activeCourse: number;
  setActiveCourseDetail: Function;
}

const Nav: FunctionComponent<NavProps> = ({
  isTeacher,
  activeCourseDetail,
  activeCourse,
  setActiveCourseDetail,
}) => {
  const courseSelect = isTeacher ? <ActiveCourse /> : null;
  const { targetLanguage } = activeCourseDetail;

  useEffect(() => {
    setActiveCourseDetail(activeCourse);
  }, [activeCourse]);

  return (
    <div className="nav-grand-wrapper">
      {courseSelect}
      <div className="nav-grand-wrapper__link-wrapper">
        <NavLink to="/home">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            {translate("Recent Activity", targetLanguage)}
          </p>
        </NavLink>
        <NavLink to="/rooms">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            {translate("Chat Rooms", targetLanguage)}
          </p>
        </NavLink>
        <NavLink to="/students">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            {translate("Students", targetLanguage)}
          </p>
        </NavLink>
        <NavLink to="/tasks">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            {translate("Tasks", targetLanguage)}
          </p>
        </NavLink>
        <NavLink to="/resources">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            {translate("Resources", targetLanguage)}
          </p>
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  user,
  course,
}: {
  user: User;
  course: CourseState;
}) => {
  return {
    isTeacher: user.isTeacher,
    activeCourseDetail: course.activeCourseDetail,
    activeCourse: course.activeCourse,
  };
};

export default connect(mapStateToProps, { setActiveCourseDetail })(Nav);
