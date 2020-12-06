import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { getTaskDetail } from "../../actions";
import { CourseState, Student } from "../../interfaces/reducerInterfaces";
import "./TaskDetail.scss";

interface TaskDetailState {
  task: Task;
  students: Student[];
}

interface Task {
  id: number;
  title: string;
  description: string;
}

const TaskDetail: FunctionComponent<any> = ({
  activeCourse,
  taskDetail,
  getTaskDetail,
  match,
}) => {
  useEffect(() => {
    if (activeCourse) getTaskDetail(match.params.id, activeCourse);
  }, [activeCourse]);
  console.log(taskDetail.students);
  const studentRows = taskDetail.students.map((student: any) => (
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

  return (
    <div className="task-detail-grand-wrapper">
      <div className="task-detail-grand-wrapper__title-content">
        <h1 className="">{`Task #${taskDetail.task.id}: ${taskDetail.task.title}`}</h1>
        <h3>{`Course level ${taskDetail.task.level}`}</h3>
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

const mapStateToProps = ({
  course,
  taskDetail,
}: {
  course: CourseState;
  taskDetail: TaskDetailState;
}) => {
  return { activeCourse: course.activeCourse, taskDetail };
};

export default connect(mapStateToProps, { getTaskDetail })(TaskDetail);
