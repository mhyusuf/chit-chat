import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { Student } from "../../interfaces/reducerInterfaces";
import UserAvatar from "../UserAvatar";
import "./StudentPreview.scss";

type StudentPreviewProps = {
  student: Student;
};

const StudentPreview: FunctionComponent<StudentPreviewProps> = ({
  student,
}) => {
  return (
    <NavLink to={`/students/${student.id}`} className="student-preview-nav">
      <div className="student-preview-grand-wrapper">
        <UserAvatar avatarString={student.avatar} />
        <p className="student-preview-grand-wrapper__name">{student.name}</p>
      </div>
    </NavLink>
  );
};

export default StudentPreview;
