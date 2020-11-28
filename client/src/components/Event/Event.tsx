import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { ImBubble2 } from "react-icons/im";

import "./Event.scss";

type EventProps = {
  title: string;
  studentName: string;
  likes: number;
  comments: number;
  taskId: string;
};

const Event: FunctionComponent<EventProps> = ({
  title,
  studentName,
  likes,
  comments,
  taskId,
}) => {
  return (
    <NavLink to={`/tasks/${taskId}`} className="event-nav-link">
      <div className="event-grand-wrapper" style={{}}>
        <div className="event-grand-wrapper__img-title-name-div">
          <div className="event-grand-wrapper__avatar"></div>
          <div className="event-grand-wrapper__title-name-sub-div">
            <h3>{title}</h3>
            <p>{studentName}</p>
          </div>
        </div>
        <div className="event-grand-wrapper__likes-comments-div">
          <div className="event-grand-wrapper__icon-container">
            <h3>{likes}</h3>
            <FaRegHeart />
          </div>
          <div className="event-grand-wrapper__icon-container">
            <h3>{comments}</h3>
            <ImBubble2 />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Event;
