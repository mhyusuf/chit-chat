import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./StudentPreview.scss";

type StudentPreviewProps = {
  name: string;
  studentId: number;
};

const StudentPreview: FunctionComponent<StudentPreviewProps> = ({
  name,
  studentId,
}) => {
  return (
    <NavLink to={`/students/${studentId}`} className="student-preview-nav">
      <div className="student-preview-grand-wrapper">
        <div className="student-preview-grand-wrapper__avatar"></div>
        <p className="student-preview-grand-wrapper__name">{name}</p>
      </div>
    </NavLink>
  );
};

export default StudentPreview;
