import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Course,
  CourseState,
  StudentState,
  User,
} from "../../interfaces/reducerInterfaces";
import { getStudent } from "../../actions";
import StudentAssignmentPreview from "../../components/StudentAssignmentPreview";
import translate from "../../utils/translate";

interface MyAssignmentsProps {
  user: User;
  student: StudentState;
  getStudent: Function;
  targetLanguage: string;
}

const MyAssignments: FunctionComponent<MyAssignmentsProps> = ({
  user,
  student,
  getStudent,
  targetLanguage,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    getStudent(user.id);
  }, []);

  const handleOpen = (i: number | null) => setOpenIndex(i);

  const studentAssignments = student.assignments
    .sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
    .map((assignment, index) => {
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
    });

  return (
    <div className="my-assignments-grand-wrapper">
      <h1>{translate("My Assignments", targetLanguage)}</h1>
      <div className="my-assignments-grand-wrapper__previews-wrapper">
        {studentAssignments}
      </div>
    </div>
  );
};

function mapStateToProps({
  user,
  student,
  course,
}: {
  user: User;
  student: StudentState;
  course: CourseState;
}) {
  return {
    user,
    student,
    targetLanguage: course.activeCourseDetail.targetLanguage,
  };
}
export default connect(mapStateToProps, { getStudent })(MyAssignments);
