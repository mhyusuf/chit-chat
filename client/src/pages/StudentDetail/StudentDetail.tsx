import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import StudentAssignmentPreview from "../../components/StudentAssignmentPreview";
import RoomPreview from "../../components/RoomPreview";
import { BsPencilSquare } from "react-icons/bs";
import { getStudent } from "../../actions/studentActions";
import "./StudentDetail.scss";
import { AssignmentPreview, User } from "../../interfaces/reducerInterfaces";

interface RoomPreview1 {
  name: string;
  studentNames: string[];
  RoomId: string;
}

interface Student {
  student: User;
  assignments: AssignmentPreview[];
  room: RoomPreview1;
}

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

type StudentDetailProps = {
  getStudent: Function;
  student: User;
};

const StudentDetail: FunctionComponent<StudentDetailProps> = ({
  getStudent,
  student,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isTeacher, setIsTeacher] = useState<boolean>(true);

  const handleOpen = (i: number | null) => setOpenIndex(i);

  useEffect(() => {
    getStudent(student.id);
  }, []);

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
        <h2 className="student-detail-grand-wrapper__tasks__subtitle">
          Assignments
        </h2>
        {tasks.map((task, index) => {
          return (
            <StudentAssignmentPreview
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
      {isTeacher && (
        <div className="student-detail-grand-wrapper__room">
          <h2 className="student-detail-grand-wrapper__room__subtitle">
            Chat Group
          </h2>
          <div className="student-detail-grand-wrapper__room__room-preview-wrapper">
            {/* <RoomPreview
              teamName={room.name}
              teamMembers={student.room.teamMembers}
              roomId={student.room.roomId}
              key={student.room.roomId}
            /> */}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ student }: { student: Student }) => {
  return { student: student.student, room: student.room };
};

export default connect(mapStateToProps, { getStudent })(StudentDetail);
