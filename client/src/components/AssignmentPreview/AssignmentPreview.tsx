import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { ImBubble2 } from "react-icons/im";

import "./AssignmentPreview.scss";
import { Student } from "../../interfaces/reducerInterfaces";
import UserAvatar from "../UserAvatar";

type AssignmentProps = {
  title: string;
  student: { name: string; avatar: string };
  likes: number;
  comments: number;
  assignmentId: number;
};

const Assignment: FunctionComponent<AssignmentProps> = ({
  title,
  student,
  likes,
  comments,
  assignmentId,
}) => {
  return (
    <NavLink
      to={`/assignments/${assignmentId}`}
      className="assignment-nav-link"
    >
      <div className="assignment-grand-wrapper" style={{}}>
        <div className="assignment-grand-wrapper__img-title-name-div">
          <UserAvatar
            avatarString={student.avatar}
            className="assignment-grand-wrapper__img-title-name-div__avatar"
          />
          <div className="assignment-grand-wrapper__img-title-name-div__title-name-sub-div">
            <h3>{title}</h3>
            <p>{student.name}</p>
          </div>
        </div>
        <div className="assignment-grand-wrapper__likes-comments-div">
          <div className="assignment-grand-wrapper__icon-container">
            <h3>{likes}</h3>
            <FaRegHeart className="red" />
          </div>
          <div className="assignment-grand-wrapper__icon-container">
            <h3>{comments}</h3>
            <ImBubble2 className="blue" />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Assignment;
