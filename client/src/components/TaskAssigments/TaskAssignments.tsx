import React, { FunctionComponent } from "react";
import { Student } from "../../interfaces/reducerInterfaces";

import "./TaskAssignments.scss";

interface TaskAssignmentsProps {
  students: Student[];
  setShowEdit: (showEdit: boolean) => void;
}

const TaskAssignments: FunctionComponent<TaskAssignmentsProps> = ({
  students,
  setShowEdit,
}) => {
  return (
    <>
      <div className="task-detail-grand-wrapper__page-content__table-block__student-table">
        <table>
          {students.map((student: any) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.Assignments.length ? "✓" : ""}</td>
              <td>
                {student.Assignments.length && student.Assignments[0].fileName
                  ? "✓"
                  : ""}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <button onClick={() => setShowEdit(true)}>assign</button>
    </>
  );
};

export default TaskAssignments;
