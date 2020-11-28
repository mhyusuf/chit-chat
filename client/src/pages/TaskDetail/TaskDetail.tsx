import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

import "./TaskDetail.scss";

const studentArr = [
  {
    name: "Billy S",
    assigned: true,
    completed: true,
  },
  {
    name: "Esteban C",
    assigned: false,
    completed: false,
  },
  {
    name: "Uardo V",
    assigned: true,
    completed: false,
  },
  {
    name: "Luís P",
    assigned: true,
    completed: true,
  },
  {
    name: "Sol G",
    assigned: true,
    completed: false,
  },
  {
    name: "Benito L",
    assigned: true,
    completed: false,
  },
  {
    name: "Matteo P",
    assigned: false,
    completed: false,
  },
  {
    name: "Jesus R",
    assigned: true,
    completed: true,
  },
  {
    name: "Marina J",
    assigned: true,
    completed: false,
  },
  {
    name: "Billy S",
    assigned: true,
    completed: true,
  },
  {
    name: "Esteban C",
    assigned: false,
    completed: false,
  },
  {
    name: "Uardo V",
    assigned: true,
    completed: false,
  },
  {
    name: "Luís P",
    assigned: true,
    completed: true,
  },
  {
    name: "Sol G",
    assigned: true,
    completed: false,
  },
  {
    name: "Benito L",
    assigned: true,
    completed: false,
  },
  {
    name: "Matteo P",
    assigned: false,
    completed: false,
  },
  {
    name: "Jesus R",
    assigned: true,
    completed: true,
  },
  {
    name: "Marina J",
    assigned: true,
    completed: false,
  },
];
const studentRows = studentArr.map((student, idx) => (
  <tr key={idx}>
    <td>{student.name}</td>
    <td>{student.assigned ? "✓" : ""}</td>
    <td>{student.completed ? "✓" : ""}</td>
  </tr>
));

const TaskDetail: FunctionComponent<any> = () => {
  return (
    <div className="task-detail-grand-wrapper">
      <div className="task-detail-grand-wrapper__title-content">
        <h1 className="">Task #1: Introducing yourself and others</h1>
        <h3>Course level 1</h3>
      </div>
      <div className="task-detail-grand-wrapper__page-content">
        <div className="task-detail-grand-wrapper__page-content__table-block">
          <th className="task-detail-grand-wrapper__page-content__table-block__headers">
            <td>Student</td>
            <td>assigned?</td>
            <td>completed?</td>
          </th>
          <div className="task-detail-grand-wrapper__page-content__table-block__student-table">
            <table>{studentRows}</table>
          </div>
          <button>edit</button>
        </div>
        <div className="task-detail-grand-wrapper__page-content__doc-preview-block">
          <div className="task-detail-grand-wrapper__page-content__doc-preview-block__preview" />
          <button>download</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
