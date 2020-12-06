import React, { FunctionComponent, useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import "./TaskPreview.scss";

const TaskPreview: FunctionComponent<any> = ({
  task,
  index,
  open,
  handleOpen,
}) => {
  const [isTeacher, setIsTeacher] = useState(false);

  return (
    <div className="task-preview-grand-wrapper">
      <div
        className="task-preview__header"
        onClick={() => handleOpen(!open ? index : null)}
      >
        <h2>{task.title}</h2>
        {!open ? (
          <IoIosArrowDropdownCircle className="header__dropdown-icon" />
        ) : (
          <IoIosArrowDropupCircle className="header__dropdown-icon" />
        )}
      </div>
      {open && (
        <div className="task-preview__content">
          <div className="content__main">
            <p>{task.description}</p>
            <div className="content__picture"></div>
          </div>
          <div className="content__buttons">
            <Link to="/tasks/:id">
              <button>View Task</button>
            </Link>
            {isTeacher && (
              <button>
                <p>Assign All</p>
              </button>
            )}
            {isTeacher && (
              <button>
                <p>Assign To</p>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskPreview;
