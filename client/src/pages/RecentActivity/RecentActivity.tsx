import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import Assignment from "../../components/AssignmentPreview";
import {
  AssignmentPreview,
  CourseState,
  StudentUser,
} from "../../interfaces/reducerInterfaces";
import {
  getAssignmentPreviewsByCourse,
  getAssignmentPreviewsByRoom,
  dismissAssignment,
} from "../../actions";
import "./RecentActivity.scss";
import translate from "../../utils/translate";

interface RecentActivityProps {
  assignments: AssignmentPreview[];
  getAssignmentPreviewsByCourse: (id: string) => void;
  getAssignmentPreviewsByRoom: Function;
  dismissAssignment: Function;
  activeCourse: number;
  targetLanguage: string;
  user: StudentUser;
}

const RecentActivity: FunctionComponent<RecentActivityProps> = ({
  getAssignmentPreviewsByCourse,
  getAssignmentPreviewsByRoom,
  dismissAssignment,
  assignments,
  activeCourse,
  targetLanguage,
  user,
}) => {
  useEffect(() => {
    if (activeCourse && user.isTeacher)
      getAssignmentPreviewsByCourse(`${activeCourse}`);
    else if (activeCourse && !user.isTeacher)
      getAssignmentPreviewsByRoom(`${user.RoomId}`);
  }, []);

  const assignmentsToShow =
    assignments &&
    assignments.length &&
    assignments
      .filter((assignment) => assignment.fileData)
      .sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));

  const handleClick = (id: number): void => {
    dismissAssignment(id);
  };

  return (
    <div className="recent-activity-grand-wrapper">
      <h1>{translate("Recent Activity", targetLanguage)}</h1>
      <div className="recent-activity-events-wrapper">
        {assignmentsToShow && assignmentsToShow.length ? (
          assignmentsToShow.map(
            (assignment: AssignmentPreview, idx: number) => {
              return (
                <Assignment
                  student={assignment.student}
                  key={idx}
                  title={assignment.taskName}
                  likes={assignment.likes}
                  comments={assignment.comments}
                  assignmentId={assignment.id}
                  handleClick={handleClick}
                  isTeacher={user.isTeacher}
                />
              );
            }
          )
        ) : (
          <div className="nothing-new">
            {translate("Nothing to show", targetLanguage)}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  assignments,
  course,
  user,
}: {
  assignments: AssignmentPreview[];
  course: CourseState;
  user: StudentUser;
}) => {
  return {
    assignments,
    activeCourse: course.activeCourse,
    targetLanguage: course.activeCourseDetail.targetLanguage,
    user,
  };
};

export default connect(mapStateToProps, {
  getAssignmentPreviewsByCourse,
  getAssignmentPreviewsByRoom,
  dismissAssignment,
})(RecentActivity);
