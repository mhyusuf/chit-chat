import React, { FunctionComponent, useState } from "react";
import StudentTaskPreview from "../../components/StudentTaskPreview";
import ChatPreview from "../../components/ChatPreview";
import { BsPencilSquare } from "react-icons/bs";
import "./StudentDetail.scss";

const student = {
  name: "Brett",
  chatGroup: {
    roomName: "Blue",
    teamMembers: ["Timmy", "James", "Olivia", "Carmen", "Pili", "Brett"],
    unseenMessages: false,
    roomId: "somerandomstring",
  },
};

const tasks = [
  {
    id: 1,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
    submitted: true,
  },
  {
    id: 2,
    title: "Some title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
    submitted: true,
  },
  {
    id: 3,
    title: "Some title",
    submitted: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
  {
    id: 4,
    title: "Some title",
    submitted: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
  {
    id: 5,
    title: "Some title",
    submitted: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
  {
    id: 6,
    title: "Some title",
    submitted: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus massa ac orci placerat viverra. Mauris pellentesque placerat viverra. Duis eleifend eu purus quis maximus.",
  },
];

const StudentDetail: FunctionComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (i: number | null) => setOpenIndex(i);

  return (
    <div className="student-detail-grand-wrapper">
      <div className="student-detail-grand-wrapper__student-details">
        <div className="student-detail-grand-wrapper__student-details__avatar"></div>
        <h2 className="student-detail-grand-wrapper__student-details__student-name">
          {student.name}
        </h2>
        <BsPencilSquare className="student-detail-grand-wrapper__student-details__edit-icon" />
      </div>
      <div className="student-detail-grand-wrapper__tasks">
        <h2 className="student-detail-grand-wrapper__tasks__subtitle">Tasks</h2>
        {tasks.map((task, index) => {
          return (
            <StudentTaskPreview
              key={task.id}
              open={index === openIndex}
              handleOpen={handleOpen}
              index={index}
              task={task}
              submitted={task.submitted}
            />
          );
        })}
      </div>
      <div className="student-detail-grand-wrapper__room">
        <h2 className="student-detail-grand-wrapper__room__subtitle">
          Chat Group
        </h2>
        <ChatPreview
          teamName={student.chatGroup.roomName}
          teamMembers={student.chatGroup.teamMembers}
          unseenMessages={student.chatGroup.unseenMessages}
          roomId={student.chatGroup.roomId}
          key={student.chatGroup.roomId}
        />
      </div>
    </div>
  );
};

export default StudentDetail;
