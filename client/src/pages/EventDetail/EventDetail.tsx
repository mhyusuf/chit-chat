import React, { FunctionComponent } from "react";
import "./EventDetail.scss";
import Comment from "../../components/Comment";
import { IoIosSend } from "react-icons/io";

const event = {
  type: "submit",
  submitData: ["document"],
  task: {
    level: 1,
    title: "Introducing yourself and others",
    description:
      "Provide a powerpoint presentation with four paragraphs in your target language about yourself, your family and your hometown. What do you like to do? What are some of your favorite things?",
  },
  student: {
    name: "David A.",
    avatar: "DA",
  },
  comments: [
    { sender: "student1", content: "Wow. Awesome" },
    { sender: "student2", content: "Agreed, good job" },
    { sender: "student3", content: "Aren't we learning French?" },
    { sender: "student4", content: "Oui" },
    { sender: "student1", content: "Wow. Awesome" },
    { sender: "student2", content: "Agreed, good job" },
    { sender: "student3", content: "Aren't we learning French?" },
    { sender: "student4", content: "Oui" },
    { sender: "student1", content: "Wow. Awesome" },
    { sender: "student2", content: "Agreed, good job" },
    { sender: "student3", content: "Aren't we learning French?" },
    { sender: "student4", content: "Oui" },
  ],
  likes: ["123", "231", "666", "231"],
  completed: true,
};

const comments = event.comments.map((comment, idx) => (
  <Comment key={idx} comment={comment} />
));

const EventDetail: FunctionComponent<any> = () => {
  return (
    <div className="event-detail-grand-wrapper">
      <div className="event-detail-grand-wrapper__text-wrapper">
        <h1>{event.task.title}</h1>
        <h2 className="--lessPadding">{event.student.name}</h2>
      </div>
      <div className="event-detail-grand-wrapper__content-wrapper">
        <div className="event-detail-grand-wrapper__content-wrapper__preview">
          <div className="preview-placeholder" />
          <button onClick={(e) => e.preventDefault()}>download</button>
        </div>
        <div className="event-detail-grand-wrapper__comment-wrapper">
          <div className="event-detail-grand-wrapper__comment-wrapper__comments">
            {comments}
          </div>
          <form>
            <input />
            <button onClick={(e) => e.preventDefault()}>
              <IoIosSend className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
