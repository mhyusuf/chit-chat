import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from "react";
import "./AssignmentDetail.scss";
import Comment from "../../components/Comment";
import { IoIosSend } from "react-icons/io";
import {
  AssignmentDetail as IAssignmentDetail,
  User,
} from "../../interfaces/reducerInterfaces";
import {
  getAssignmentDetailById,
  likeAssignment,
  commentAssignment,
} from "../../actions";
import { connect, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { SET_ERROR } from "../../actions/types";

interface MatchInterface {
  id: string;
}

interface AssignmentDetailProps extends RouteComponentProps<MatchInterface> {
  assignment: IAssignmentDetail;
  getAssignmentDetailById: Function;
  likeAssignment: Function;
  commentAssignment: Function;
  user: User;
  error: string;
}

const AssignmentDetail: FunctionComponent<AssignmentDetailProps> = (props) => {
  const {
    assignment,
    getAssignmentDetailById,
    match,
    likeAssignment,
    user,
    commentAssignment,
    error,
  } = props;
  const [commentInput, setCommentInput] = useState("");
  const scrollRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    getAssignmentDetailById(match.params.id);
    return () => {
      dispatch({ type: SET_ERROR, payload: "" });
    };
  }, []);

  const comments =
    assignment.comments &&
    assignment.comments.map((comment, idx) => (
      <div
        className="comment-grand-wrapper"
        ref={idx === assignment.comments.length - 1 ? scrollRef : null}
        key={idx}
      >
        <Comment comment={comment} />
      </div>
    ));

  function likeHandler(e: any) {
    e.preventDefault();
    likeAssignment(match.params.id);
  }

  function submitHandler(e: any) {
    e.preventDefault();
    if (!commentInput.trim()) {
      dispatch({ type: SET_ERROR, payload: "Please enter a comment." });
    } else {
      dispatch({ type: SET_ERROR, payload: "" });
      commentAssignment(match.params.id, user, commentInput);
      setCommentInput("");
    }
  }

  let fileType = "";
  const submitted = assignment.submitData ? true : false;

  if (assignment.fileName) {
    const extension = assignment.fileName.split(".")[1];
    if (extension === "doc" || extension === "docx") fileType = "wordDoc";
    if (extension === "ppt" || extension === "pptx") fileType = "powerpoint";
    if (extension === "pdf") fileType = "pdf";
  }

  return (
    <div className="assignment-detail-grand-wrapper">
      <div className="assignment-detail-grand-wrapper__text-wrapper">
        <div className="assignment-detail-grand-wrapper__text-wrapper__left-block">
          <h1>{assignment.task.title}:</h1>
          <h2 className="--lessPadding">{assignment.student.name}</h2>
        </div>
        <div className="assignment-detail-grand-wrapper__text-wrapper__right-block">
          <h4>{assignment.task.description}</h4>
        </div>
      </div>

      {!submitted && (
        <div className="assignment-detail-grand-wrapper__submission-wrapper">
          <h2>Nothing uploaded yet!</h2>
          <button>upload</button>
        </div>
      )}

      {submitted && (
        <div className="assignment-detail-grand-wrapper__content-wrapper">
          <div className="assignment-detail-grand-wrapper__content-wrapper__preview">
            <div className={`preview-icon ${fileType ? fileType : null}`} />
            <div className="assignment-detail-grand-wrapper__content-wrapper__preview__button-wrapper">
              <button onClick={(e) => e.preventDefault()}>download</button>
              <button className="heart" onClick={likeHandler}>
                <FaRegHeart />
              </button>
            </div>
          </div>
          <div className="assignment-detail-grand-wrapper__comment-wrapper">
            <div className="assignment-detail-grand-wrapper__comment-wrapper__comments">
              {comments}
            </div>
            <form>
              <input
                onChange={(e) => setCommentInput(e.target.value)}
                value={commentInput}
              />
              <button onClick={submitHandler}>
                <IoIosSend className="send-icon" />
              </button>
            </form>
            {error && <div className="error">{error}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps({
  assignmentDetail,
  user,
  error,
}: {
  assignmentDetail: IAssignmentDetail;
  user: User;
  error: string;
}) {
  return { assignment: assignmentDetail, user, error };
}

export default connect(mapStateToProps, {
  getAssignmentDetailById,
  likeAssignment,
  commentAssignment,
})(AssignmentDetail);
