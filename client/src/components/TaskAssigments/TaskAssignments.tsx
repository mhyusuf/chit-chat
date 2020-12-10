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
      <div className="student-table">
        {students.map((student: any) => (
          <div className="row" key={student.id}>
            <p>{student.name}</p>
            <p>{student.Assignments.length ? "✓" : ""}</p>
            <p>
              {student.Assignments.length && student.Assignments[0].fileName
                ? "✓"
                : ""}
            </p>
          </div>
        ))}
      </div>
      <button onClick={() => setShowEdit(true)}>assign</button>
    </>
  );
};

export default TaskAssignments;
