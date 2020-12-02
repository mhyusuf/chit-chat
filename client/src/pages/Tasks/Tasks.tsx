import React, { FunctionComponent, useState } from "react";
import TaskPreview from "../../components/TaskPreview/TaskPreview";

import "./Tasks.scss";

const tasks = [
  {
    id: 1,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
  {
    id: 2,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
  {
    id: 3,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
  {
    id: 4,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
  {
    id: 5,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
  {
    id: 6,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
];

const Tasks: FunctionComponent<any> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="tasks-grand-wrapper">
      <h1>Tasks</h1>
      <div className="tasks-grand-wrapper__tasks-wrapper">
        {tasks.map((task, i) => {
          return (
            <TaskPreview
              key={task.id}
              task={task}
              open={i === openIndex}
              index={i}
              handleOpen={(i: number) => setOpenIndex(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
