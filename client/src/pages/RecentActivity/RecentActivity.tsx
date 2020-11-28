import React, { FunctionComponent } from "react";
import Event from "../../components/Event";

import "./RecentActivity.scss";

const RecentActivity: FunctionComponent = () => {
  //TODO: mock data

  const mockData = [
    {
      taskName: "task 1",
      studentName: "Timmy",
      studentId: "somestrangestring",
      taskId: "somestrangestring",
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
      taskName: "task 2",
      studentName: "Timmy",
      studentId: "somestrangestring",
      taskId: "somestrangestring",
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
      taskName: "task 3",
      studentName: "Timmy",
      studentId: "somestrangestring",
      taskId: "somestrangestring",
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

  //TODO: Make Event Component

  return (
    <div className="recent-activity-grand-wrapper">
      <h1>Recent Activity</h1>
      <div className="recent-activity-events-wrapper">
        {mockData.map((event) => {
          return (
            <Event
              studentName={event.studentName}
              key={event.studentId}
              title={event.taskName}
              likes={event.likes}
              comments={event.comments.length}
              taskId={event.taskId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
