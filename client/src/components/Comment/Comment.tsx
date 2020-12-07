import React, { FunctionComponent } from "react";
import "./Comment.scss";
import { deleteComment } from "../../actions/assignmentActions";
import { connect } from "react-redux";
import { User } from "../../interfaces/reducerInterfaces";

interface CommentProps {
  comment: {
    sender: any;
    content: string;
    id: number;
  };
  deleteComment: Function;
  user: User;
}

const Comment: FunctionComponent<CommentProps> = (props) => {
  const { sender, content, id } = props.comment;
  const { deleteComment, user } = props;

  function deleteHandler(e: any, id: number) {
    e.preventDefault();
    deleteComment(id);
  }

  const deleteButton =
    sender === user.userId || user.isTeacher ? (
      <button className="delete-button" onClick={(e) => deleteHandler(e, id)}>
        X
      </button>
    ) : (
      <div />
    );

  return (
    <>
      <div className="comment-grand-wrapper__text">
        <h4>{sender}</h4>
        <p>{content}</p>
      </div>
      {deleteButton}
    </>
  );
};

function mapStateToProps({ user }: { user: User }) {
  return { user };
}

export default connect(mapStateToProps, { deleteComment })(Comment);
