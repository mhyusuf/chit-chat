import React, { FunctionComponent } from "react";
import "./Comment.scss";

// { sender: "student4", content: "Oui" }

const Comment: FunctionComponent<any> = (props) => {
  const { sender, content } = props.comment;

  return (
    <div className="comment-grand-wrapper">
      <div className="comment-grand-wrapper__text">
        <h4>{sender}</h4>
        <p>{content}</p>
      </div>
      <button>X</button>
    </div>
  );
};

export default Comment;
