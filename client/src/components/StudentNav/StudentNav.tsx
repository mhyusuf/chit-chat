import React, { FunctionComponent, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "../Nav/Nav.scss";
import { Course, CourseState } from "../../interfaces/reducerInterfaces";
import { setActiveCourseDetail } from "../../actions/courseActions";
import translate from "../../utils/translate";

interface StudentNavProps {
  roomId: number;
  targetLanguage: string;
  activeCourse: number;
  setActiveCourseDetail: Function;
}

const StudentNav: FunctionComponent<StudentNavProps> = (props) => {
  const { roomId, activeCourse, setActiveCourseDetail, targetLanguage } = props;

  useEffect(() => {
    activeCourse !== 0 && setActiveCourseDetail(activeCourse);
  }, [activeCourse]);

  return (
    <div className="nav-grand-wrapper">
      <div className="nav-grand-wrapper__link-wrapper">
        <NavLink to="/home">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            {translate("Recent Activity", targetLanguage)}
          </p>
        </NavLink>
        <NavLink to="/assignments">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            {translate("My Assignments", targetLanguage)}
          </p>
        </NavLink>
        <NavLink to={`/rooms/${roomId}`}>
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            {translate("Team Chat", targetLanguage)}
          </p>
        </NavLink>
        <NavLink to="/students">
          <p className="nav-grand-wrapper__link-wrapper__link-text">
            {translate("Teammates", targetLanguage)}
          </p>
        </NavLink>
      </div>
    </div>
  );
};

function mapStateToProps({ course }: { course: CourseState }) {
  return {
    targetLanguage: course.activeCourseDetail.targetLanguage,
    activeCourse: course.activeCourse,
  };
}

export default connect(mapStateToProps, { setActiveCourseDetail })(StudentNav);
