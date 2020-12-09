import React, { FunctionComponent } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
  IoIosCheckmarkCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import "./StudentAssignmentPreview.scss";

type StudentAssignmentPreviewProps = {
  open: boolean;
  handleOpen: Function;
  index: number;
  task: { id: number; title: string; description: string };
  submitted: boolean;
  id: number;
};

const StudentAssignmentPreview: FunctionComponent<StudentAssignmentPreviewProps> = ({
  open,
  handleOpen,
  index,
  task,
  submitted,
  id,
}) => {
  return (
    <div className="student-assignment-preview-grand-wrapper">
      <div
        className="student-assignment-preview__header"
        onClick={() => handleOpen(!open ? index : null)}
      >
        <h2>{task.title}</h2>
        <div className="student-assignment-preview__header__icon-div">
          {submitted && (
            <IoIosCheckmarkCircle className="student-assignment-preview__header__icon-div__submitted-icon" />
          )}
          {!open ? (
            <IoIosArrowDropdownCircle className="student-assignment-preview__header__icon-div__dropdown-icon" />
          ) : (
            <IoIosArrowDropupCircle className="student-assignment-preview__header__icon-div__dropdown-icon" />
          )}
        </div>
      </div>
      {open && (
        <div className="student-assignment-preview__content">
          <div className="content__main">
            <p>{task.description}</p>
            <img src={`/api/task/${task.id}/thumbnail`} alt="task thumbnail" />
          </div>
          <div className="content__buttons">
            <Link to={`/assignments/${id}`}>
              <button>View Assignment</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAssignmentPreview;
