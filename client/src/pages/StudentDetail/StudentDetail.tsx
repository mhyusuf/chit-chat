import React, { FunctionComponent, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import StudentAssignmentPreview from "../../components/StudentAssignmentPreview";
import RoomPreview from "../../components/RoomPreview";
import { BsPencilSquare } from "react-icons/bs";
import { getStudent } from "../../actions/studentActions";
import "./StudentDetail.scss";
import {
  AssignmentPreview,
  User,
  RoomDetailState,
  StudentState,
} from "../../interfaces/reducerInterfaces";
import UserAvatar from "../../components/UserAvatar";

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

interface matchInterface {
  id: string;
}

interface StudentDetailProps extends RouteComponentProps<matchInterface> {
  getStudent: Function;
  student: User;
  room: RoomDetailState;
  roomId: string;
  assignments: AssignmentPreview[];
}

const StudentDetail: FunctionComponent<StudentDetailProps> = ({
  getStudent,
  student,
  assignments,
  roomId,
  room,
  match,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isTeacher, setIsTeacher] = useState<boolean>(true);

  const handleOpen = (i: number | null) => setOpenIndex(i);

  const { id } = match.params;

  useEffect(() => {
    getStudent(id);
  }, []);

  console.log("student", student);
  console.log("assignments", assignments);

  const roomMembers: string[] = [];
  if (room) {
    room.students.forEach((student) => roomMembers.push(student.name));
  }

  return (
    <div className="student-detail-grand-wrapper">
      <div className="student-detail-grand-wrapper__student-details">
        <UserAvatar avatarString={student.avatar} />
        {student && (
          <h2 className="student-detail-grand-wrapper__student-details__student-name">
            {student.name}
          </h2>
        )}
        <BsPencilSquare className="student-detail-grand-wrapper__student-details__edit-icon" />
      </div>
      <div className="student-detail-grand-wrapper__tasks">
        <h2 className="student-detail-grand-wrapper__tasks__subtitle">
          Assignments
        </h2>
        {assignments.map((assignment, index) => {
          return (
            <StudentAssignmentPreview
              key={assignment.AssignmentId}
              id={assignment.AssignmentId}
              open={index === openIndex}
              handleOpen={handleOpen}
              index={index}
              task={{
                id: assignment.Task.id,
                title: assignment.Task.title,
                description: assignment.Task.description,
              }}
              submitted={assignment.fileData ? true : false}
            />
          );
        })}
        {/* {tasks.map((assignment, index) => {
          return (
            <StudentAssignmentPreview
              key={assignment.id}
              open={index === openIndex}
              handleOpen={handleOpen}
              index={index}
              task={assignment}
              submitted={assignment.submitted}
            />
          );
        })} */}
      </div>
      {isTeacher && (
        <div className="student-detail-grand-wrapper__room">
          <h2 className="student-detail-grand-wrapper__room__subtitle">
            Chat Group
          </h2>
          <div className="student-detail-grand-wrapper__room__room-preview-wrapper">
            <RoomPreview
              teamName={room.roomName}
              teamMembers={roomMembers}
              roomId={roomId}
              key={roomId}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({
  student,
  roomDetail,
}: {
  student: StudentState;
  roomDetail: RoomDetailState;
}) => {
  return {
    student: student.student,
    roomId: student.roomId,
    assignments: student.assignments,
    room: roomDetail,
  };
};

export default connect(mapStateToProps, { getStudent })(StudentDetail);
