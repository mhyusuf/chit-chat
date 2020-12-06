import React, { FunctionComponent } from "react";

import "./TaskAssignments.scss";

const TaskAssignments: FunctionComponent<any> = ({ students }) => {
  return students.map((student: any) => (
    <tr key={student.id}>
      <td>{student.name}</td>
      <td>{student.Assignments.length ? "✓" : ""}</td>
      <td>
        {student.Assignments.length && student.Assignments[0].fileName
          ? "✓"
          : ""}
      </td>
    </tr>
  ));
};

export default TaskAssignments;
