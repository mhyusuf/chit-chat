import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getTaskDetail } from "../../actions";
import TaskAssignments from "../../components/TaskAssigments";
import TaskAssignmentsEdit from "../../components/TaskAssignmentsEdit";
import UserAvatar from "../../components/UserAvatar";
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
  const query = new URLSearchParams(useLocation().search);
  const edit = query.get("edit") === "true";
  const all = query.get("all") === "true";
  const [showEdit, setShowEdit] = useState(edit ? true : false);
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
          <div className="task-detail-grand-wrapper__page-content__table-block__headers">
            <p>Student</p>
            <p>assigned?</p>
            <p>completed?</p>
          </div>
          <div className="task-detail-grand-wrapper__page-content__table-block__table-wrapper">
            {showEdit ? (
              <TaskAssignmentsEdit
                students={taskDetail.students}
                TaskId={taskDetail.task.id}
                all={all}
              />
            ) : (
              <TaskAssignments
                students={taskDetail.students}
                setShowEdit={setShowEdit}
              />
            )}
          </div>
        </div>
        <div className="task-detail-grand-wrapper__page-content__doc-preview-block">
          <div className={"thumbnail-grand-wrapper"}>
            <img
              src={`/api/task/${taskDetail.task.id}/thumbnail`}
              alt="task-thumbnail"
            />
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{taskDetail.task.description}</p>
          </div>
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
