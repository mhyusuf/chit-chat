import React, { FunctionComponent } from "react";
import "./Comment.scss";
import { deleteComment } from "../../actions/assignmentActions";
import { connect } from "react-redux";
import { Comment as IComment, User } from "../../interfaces/reducerInterfaces";

interface CommentProps {
  comment: IComment;
  deleteComment: Function;
  user: User;
}

const Comment: FunctionComponent<CommentProps> = (props) => {
  const { senderId, senderName, content, id } = props.comment;
  const { deleteComment, user } = props;

  function deleteHandler(e: any, id: number) {
    e.preventDefault();
    deleteComment(id);
  }

  const deleteButton =
    senderId === user.userId || user.isTeacher ? (
      <button className="delete-button" onClick={(e) => deleteHandler(e, id)}>
        X
      </button>
    ) : (
      <div />
    );

  return (
    <>
      <div className="comment-grand-wrapper__text">
        <h4>{senderName}</h4>
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
