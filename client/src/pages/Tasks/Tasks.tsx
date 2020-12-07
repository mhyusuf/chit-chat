import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllTasks } from "../../actions/tasksActions";
import TaskPreview from "../../components/TaskPreview/TaskPreview";
import { CourseState, Task } from "../../interfaces/reducerInterfaces";

import "./Tasks.scss";

const Tasks: FunctionComponent<any> = ({ tasks, course, getAllTasks }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (course.courseList.length) {
      const { level, targetLanguage } = course.courseList.find((el: any) => {
        return String(el.id) === String(course.activeCourse);
      });
      getAllTasks(level, targetLanguage);
    }
  }, [course.activeCourse]);

  return (
    <div className="tasks-grand-wrapper">
      <h1>Tasks</h1>
      {tasks && (
        <div className="tasks-grand-wrapper__tasks-wrapper">
          {tasks.map((task: Task, i: number) => {
            return (
              <TaskPreview
                key={task.id}
                task={task}
                open={i === openIndex}
                index={i}
                handleOpen={(i: number | null) => setOpenIndex(i)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({
  tasks,
  course,
}: {
  tasks: Task[];
  course: CourseState;
}) => {
  return { tasks, course };
};

export default connect(mapStateToProps, { getAllTasks })(Tasks);
