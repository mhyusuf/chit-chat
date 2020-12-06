import React, { FunctionComponent } from "react";

import "./TaskAssignmentsEdit.scss";

const TaskAssignmentsEdit: FunctionComponent<any> = ({ students }) => {
  return students.map((student: any) => (
    <tr key={student.id}>
      <td>{student.name}</td>
      <td>
        {student.Assignments.length ? (
          <input type="checkbox" checked />
        ) : (
          <input type="checkbox" />
        )}
      </td>
      <td>
        {student.Assignments.length && student.Assignments[0].fileName ? (
          <input type="checkbox" checked />
        ) : (
          <input type="checkbox" />
        )}
      </td>
    </tr>
  ));
};

export default TaskAssignmentsEdit;
