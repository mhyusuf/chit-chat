import React, { FunctionComponent } from "react";
import Assignment from "../../components/AssignmentPreview";

import "./RecentActivity.scss";

const RecentActivity: FunctionComponent = () => {
  const mockData = [
    {
      taskName: "assignment 1",
      studentName: "Timmy",
      studentId: "somestrangestring",
      taskId: "somestrangestring",
      assignmentId: "817264",
      likes: 8,
      comments: [
        {
          student: "Patricia",
          comment: "You really suck at French!",
        },
        {
          student: "Stuart",
          comment: "What P said",
        },
      ],
    },
    {
      taskName: "assignment 2",
      studentName: "Timmy",
      studentId: "somestrangestring",
      taskId: "somestrangestring",
      assignmentId: "817264",
      likes: 8,
      comments: [
        {
          student: "Patricia",
          comment: "You really suck at French!",
        },
        {
          student: "Stuart",
          comment: "What P said",
        },
      ],
    },
    {
      taskName: "assignment 3",
      studentName: "Timmy",
      studentId: "somestrangestring",
      taskId: "somestrangestring",
      assignmentId: "817264",
      likes: 8,
      comments: [
        {
          student: "Patricia",
          comment: "You really suck at French!",
        },
        {
          student: "Stuart",
          comment: "What P said",
        },
      ],
    },
  ];

  return (
    <div className="recent-activity-grand-wrapper">
      <h1>Recent Activity</h1>
      <div className="recent-activity-events-wrapper">
        {mockData.map((event, idx) => {
          return (
            <Assignment
              studentName={event.studentName}
              key={idx}
              title={event.taskName}
              likes={event.likes}
              comments={event.comments.length}
              taskId={event.taskId}
              assignmentId={event.assignmentId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
