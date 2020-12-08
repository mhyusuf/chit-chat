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
  CourseState,
} from "../../interfaces/reducerInterfaces";
import UserAvatar from "../../components/UserAvatar";
import translate from "../../utils/translate.js";

interface matchInterface {
  id: string;
}

interface StudentDetailProps extends RouteComponentProps<matchInterface> {
  getStudent: Function;
  student: User;
  room: RoomDetailState;
  RoomId: number;
  assignments: AssignmentPreview[];
  targetLanguage: string;
}

const StudentDetail: FunctionComponent<StudentDetailProps> = ({
  getStudent,
  student,
  assignments,
  RoomId,
  room,
  match,
  targetLanguage,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isTeacher, setIsTeacher] = useState<boolean>(true);

  const handleOpen = (i: number | null) => setOpenIndex(i);

  const { id } = match.params;

  useEffect(() => {
    getStudent(id);
  }, []);

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
          {translate("Assignments", targetLanguage)}:
        </h2>
        {assignments.map((assignment, index) => {
          return (
            <StudentAssignmentPreview
              key={`${index}/student`}
              id={assignment.id}
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
      </div>
      {isTeacher && (
        <div className="student-detail-grand-wrapper__room">
          <h2 className="student-detail-grand-wrapper__room__subtitle">
            {translate("Team", targetLanguage)}:
          </h2>
          <div className="student-detail-grand-wrapper__room__room-preview-wrapper">
            <RoomPreview
              teamName={room.roomName}
              teamMembers={roomMembers}
              roomId={RoomId}
              key={RoomId}
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
  course,
}: {
  student: StudentState;
  roomDetail: RoomDetailState;
  course: CourseState;
}) => {
  return {
    student: student.student,
    RoomId: student.RoomId,
    assignments: student.assignments,
    room: roomDetail,
    targetLanguage: course.activeCourseDetail.targetLanguage,
  };
};

export default connect(mapStateToProps, { getStudent })(StudentDetail);
