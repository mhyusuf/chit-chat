import React, {
  ChangeEvent,
  FunctionComponent,
  useState,
  useEffect,
} from "react";
import { Student } from "../../interfaces/reducerInterfaces";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./TaskAssignmentsEdit.scss";

interface TaskAssignmentsEditProps {
  students: Student[];
  TaskId: string;
  all: boolean;
}

const TaskAssignmentsEdit: FunctionComponent<TaskAssignmentsEditProps> = ({
  students,
  TaskId,
  all,
}) => {
  const history = useHistory();
  const initalState = students.map((student: any, i: number) => {
    return { id: student.id, idx: i, assigned: student.Assignments.length > 0 };
  });

  const [assignments, setAssignments] = useState(initalState);

  useEffect(() => {
    if (all) {
      setAssignments((assignments) => {
        return assignments.map((assignment) => {
          return { ...assignment, assigned: true };
        });
      });
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAssignments((assignments) => {
      return assignments.map((assignment, i: number) => {
        if (String(i) === e.target.dataset.idx) {
          return { ...assignment, assigned: !assignment.assigned };
        } else {
          return assignment;
        }
      });
    });
  };
  const handleSubmit = async () => {
    for (let i = 0; i < assignments.length; i++) {
      const assignment = assignments[i];
      const alreadyAssigned = initalState[i].assigned;
      const currentlyAssigned = assignment.assigned;
      if (currentlyAssigned && !alreadyAssigned) {
        await axios.post("/api/assignment", {
          StudentId: assignment.id,
          TaskId,
        });
      }
    }
    history.push(`/tasks/${TaskId}`);
    history.go(0);
  };

  return (
    <>
      <div className="task-detail-grand-wrapper__page-content__table-block__student-table">
        <table>
          {students.map((student: any, i: number) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                {student.Assignments.length ? (
                  <input type="checkbox" checked disabled />
                ) : (
                  <input
                    type="checkbox"
                    data-idx={i}
                    checked={assignments[i].assigned}
                    onChange={handleChange}
                  />
                )}
              </td>
              <td>
                {student.Assignments.length && student.Assignments[0].fileName
                  ? "✓"
                  : ""}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <button onClick={handleSubmit}>confirm</button>
    </>
  );
};

export default TaskAssignmentsEdit;
