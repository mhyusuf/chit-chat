import React, { FunctionComponent, useEffect, useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  User,
  Task,
  TaskDetailState,
  CourseState,
} from "../../interfaces/reducerInterfaces";
import { getTaskDetail } from "../../actions";
import "./TaskPreview.scss";

interface TaskPreviewProps {
  task: Task;
  index: number;
  open: boolean;
  isTeacher: boolean;
  handleOpen: (i: number | null) => void;
  taskDetail: TaskDetailState;
  getTaskDetail: (TaskId: string, CourseId: string) => void;
  activeCourse: string;
}

const TaskPreview: FunctionComponent<TaskPreviewProps> = ({
  task,
  index,
  open,
  handleOpen,
  isTeacher,
  getTaskDetail,
  activeCourse,
}) => {
  useEffect(() => {
    getTaskDetail(String(task.id), activeCourse);
  }, []);

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
            <div className="content__picture">
              <img
                src={`/api/task/${task.id}/thumbnail`}
                alt="task-thumbnail"
              />
            </div>
          </div>
          <div className="content__buttons">
            <Link to={`/tasks/${task.id}`}>
              <button>View Task</button>
            </Link>
            {isTeacher && (
              <Link to={`/tasks/${task.id}?edit=true&all=true`}>
                <button>Assign All</button>
              </Link>
            )}
            {isTeacher && (
              <Link to={`/tasks/${task.id}?edit=true`}>
                <button>Assign To</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({
  user,
  taskDetail,
  course,
}: {
  user: User;
  taskDetail: TaskDetailState;
  course: CourseState;
}) => {
  return {
    isTeacher: user.isTeacher,
    taskDetail,
    activeCourse: course.activeCourse,
  };
};

export default connect(mapStateToProps, { getTaskDetail })(TaskPreview);
