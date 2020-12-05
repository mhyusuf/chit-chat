import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import Assignment from "../../components/AssignmentPreview";
import {
  AssignmentPreview,
  CourseState,
} from "../../interfaces/reducerInterfaces";
import { getAssignmentPreviewsByCourse } from "../../actions";
import "./RecentActivity.scss";

interface RecentActivityProps {
  assignments: AssignmentPreview[];
  getAssignmentPreviewsByCourse: (id: string) => void;
  activeCourse: string;
}

const RecentActivity: FunctionComponent<RecentActivityProps> = ({
  getAssignmentPreviewsByCourse,
  assignments,
  activeCourse,
}) => {
  useEffect(() => {
    if (activeCourse) getAssignmentPreviewsByCourse(activeCourse);
  }, [activeCourse]);

  return (
    <div className="recent-activity-grand-wrapper">
      <h1>Recent Activity</h1>
      <div className="recent-activity-events-wrapper">
        {assignments &&
          assignments.map((assignment: AssignmentPreview, idx: number) => {
            return (
              <Assignment
                student={assignment.student}
                key={idx}
                title={assignment.taskName}
                likes={assignment.likes}
                comments={assignment.comments}
                assignmentId={assignment.AssignmentId}
              />
            );
          })}
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
  return { assignments, activeCourse: course.activeCourse };
};

export default connect(mapStateToProps, { getAssignmentPreviewsByCourse })(
  RecentActivity
);
