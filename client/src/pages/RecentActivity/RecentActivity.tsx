import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import Assignment from "../../components/AssignmentPreview";
import {
  AssignmentPreview,
  CourseState,
} from "../../interfaces/reducerInterfaces";
import { getAssignmentPreviewsByCourse } from "../../actions";
import "./RecentActivity.scss";
import translate from "../../utils/translate";

interface RecentActivityProps {
  assignments: AssignmentPreview[];
  getAssignmentPreviewsByCourse: (id: string) => void;
  activeCourse: number;
  targetLanguage: string;
}

const RecentActivity: FunctionComponent<RecentActivityProps> = ({
  getAssignmentPreviewsByCourse,
  assignments,
  activeCourse,
  targetLanguage,
}) => {
  useEffect(() => {
    if (activeCourse) getAssignmentPreviewsByCourse(`${activeCourse}`);
  }, [activeCourse]);

  const assignmentsToShow =
    assignments &&
    assignments.length &&
    assignments
      .filter((assignment) => assignment.fileData)
      .sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
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
}: {
  assignments: AssignmentPreview[];
  course: CourseState;
}) => {
  return {
    assignments,
    activeCourse: course.activeCourse,
    targetLanguage: course.activeCourseDetail.targetLanguage,
  };
};

export default connect(mapStateToProps, { getAssignmentPreviewsByCourse })(
  RecentActivity
);
