import React, { FunctionComponent, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import StudentAssignmentPreview from "../../components/StudentAssignmentPreview";
import RoomPreview from "../../components/RoomPreview";
import { BsPencilSquare } from "react-icons/bs";
import { getStudent } from "../../actions/studentActions";
import { editStudentName } from "../../actions/teacherActions";
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
  editStudentName: Function;
  student: User;
  user: User;
  room: RoomDetailState;
  RoomId: number;
  assignments: AssignmentPreview[];
  targetLanguage: string;
}

const StudentDetail: FunctionComponent<StudentDetailProps> = ({
  history,
  getStudent,
  editStudentName,
  student,
  user,
  assignments,
  RoomId,
  room,
  match,
  targetLanguage,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isTeacher, setIsTeacher] = useState<boolean>(false);
  const [editName, setEditName] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>("");

  const handleOpen = (i: number | null) => setOpenIndex(i);

  const { id } = match.params;

  useEffect(() => {
    getStudent(id);
    setStudentName(student.name);
    setIsTeacher(user.isTeacher);
  }, []);

  const roomMembers: string[] = [];
  if (room) {
    room.students.forEach((student) => roomMembers.push(student.name));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.target.value);
  };

  const handleClick = async () => {
    await editStudentName(studentName, student.userId);
    setEditName(!editName);
    history.go(0);
  };

  return (
    <div className="student-detail-grand-wrapper">
      <div className="student-detail-grand-wrapper__student-details">
        {student && <UserAvatar avatarString={student.avatar} />}
        {student && !editName && (
          <h2 className="student-detail-grand-wrapper__student-details__student-name">
            {student.name}
          </h2>
        )}
        {student && editName && (
          <input
            type="text"
            value={studentName}
            name="editStudentName"
            onChange={handleChange}
          />
        )}
        {isTeacher && !editName && (
          <BsPencilSquare
            onClick={() => {
              setEditName(!editName);
              setStudentName(student.name);
            }}
            className="student-detail-grand-wrapper__student-details__edit-icon"
          />
        )}
        {isTeacher && editName && <button onClick={handleClick}>save</button>}
      </div>
      <div className="student-detail-grand-wrapper__tasks">
        <h2 className="student-detail-grand-wrapper__tasks__subtitle">
          Assignments
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
  user,
}: {
  student: StudentState;
  roomDetail: RoomDetailState;
  course: CourseState;
  user: User;
}) => {
  return {
    student: student.student,
    RoomId: student.RoomId,
    user: user,
    assignments: student.assignments,
    room: roomDetail,
    targetLanguage: course.activeCourseDetail.targetLanguage,
  };
};

export default connect(mapStateToProps, { getStudent, editStudentName })(
  StudentDetail
);
