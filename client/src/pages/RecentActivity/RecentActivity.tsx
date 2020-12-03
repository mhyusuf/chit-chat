import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import Assignment from "../../components/AssignmentPreview";
import {
  AssignmentPreview,
  AssignmentState,
} from "../../interfaces/reducerInterfaces";
import { getAssignmentPreviewsByCourse } from "../../actions";
import "./RecentActivity.scss";

const RecentActivity: FunctionComponent<any> = ({
  getAssignmentPreviewsByCourse,
  previews,
}) => {
  // const mockData = [
  //   {
  //     taskName: "assignment 1",
  //     studentName: "Timmy",
  //     studentId: "somestrangestring",
  //     taskId: "somestrangestring",
  //     assignmentId: "817264",
  //     likes: 8,
  //     comments: [
  //       {
  //         student: "Patricia",
  //         comment: "You really suck at French!",
  //       },
  //       {
  //         student: "Stuart",
  //         comment: "What P said",
  //       },
  //     ],
  //   },
  //   {
  //     taskName: "assignment 2",
  //     studentName: "Timmy",
  //     studentId: "somestrangestring",
  //     taskId: "somestrangestring",
  //     assignmentId: "817264",
  //     likes: 8,
  //     comments: [
  //       {
  //         student: "Patricia",
  //         comment: "You really suck at French!",
  //       },
  //       {
  //         student: "Stuart",
  //         comment: "What P said",
  //       },
  //     ],
  //   },
  //   {
  //     taskName: "assignment 3",
  //     studentName: "Timmy",
  //     studentId: "somestrangestring",
  //     taskId: "somestrangestring",
  //     assignmentId: "817264",
  //     likes: 8,
  //     comments: [
  //       {
  //         student: "Patricia",
  //         comment: "You really suck at French!",
  //       },
  //       {
  //         student: "Stuart",
  //         comment: "What P said",
  //       },
  //     ],
  //   },
  // ];

  useEffect(() => {
    getAssignmentPreviewsByCourse(2);
  }, []);

  return (
    <div className="recent-activity-grand-wrapper">
      <h1>Recent Activity</h1>
      <div className="recent-activity-events-wrapper">
        {previews &&
          previews.map((assignment: AssignmentPreview, idx: number) => {
            return (
              <Assignment
                studentName={assignment.student.name}
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

const mapStateToProps = ({ assignments }: { assignments: AssignmentState }) => {
  return { previews: assignments.AssignmentPreviews };
};

export default connect(mapStateToProps, { getAssignmentPreviewsByCourse })(
  RecentActivity
);
