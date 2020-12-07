import React, { FunctionComponent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { StudentState, User } from "../../interfaces/reducerInterfaces";
import { getStudent } from "../../actions";
import StudentAssignmentPreview from "../../components/StudentAssignmentPreview";

interface MyAssignmentsProps {
  user: User;
  student: StudentState;
  getStudent: Function;
}

const MyAssignments: FunctionComponent<MyAssignmentsProps> = ({
  user,
  student,
  getStudent,
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
          key={assignment.id}
          open={index === openIndex}
          handleOpen={handleOpen}
          index={index}
          task={{
            id: assignment.id,
            title: assignment.Task.title,
            description: assignment.Task.description,
          }}
          submitted={assignment.fileData ? true : false}
        />
      );
    });

  return (
    <div className="my-assignments-grand-wrapper">
      <h1>My Assignments</h1>
      <div className="my-assignments-grand-wrapper__previews-wrapper">
        {studentAssignments}
      </div>
    </div>
  );
};

function mapStateToProps({
  user,
  student,
}: {
  user: User;
  student: StudentState;
}) {
  return { user, student };
}
export default connect(mapStateToProps, { getStudent })(MyAssignments);
