import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTaskDetail } from "../../actions";
import TaskAssignments from "../../components/TaskAssigments";
import TaskAssignmentsEdit from "../../components/TaskAssignmentsEdit";
import {
  CourseState,
  TaskDetailState,
} from "../../interfaces/reducerInterfaces";
import "./TaskDetail.scss";

const TaskDetail: FunctionComponent<any> = ({
  activeCourse,
  taskDetail,
  getTaskDetail,
  match,
}) => {
  const [showEdit, setShowEdit] = useState(false);
  useEffect(() => {
    if (activeCourse) getTaskDetail(match.params.id, activeCourse);
  }, [activeCourse]);

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
          {showEdit ? (
            <TaskAssignmentsEdit
              students={taskDetail.students}
              TaskId={taskDetail.task.id}
            />
          ) : (
            <TaskAssignments
              students={taskDetail.students}
              setShowEdit={setShowEdit}
            />
          )}
        </div>
        <div className="task-detail-grand-wrapper__page-content__doc-preview-block">
          <div className="task-detail-grand-wrapper__page-content__doc-preview-block__preview"></div>
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
