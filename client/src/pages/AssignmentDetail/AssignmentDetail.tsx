import React, { FunctionComponent, useEffect } from "react";
import "./AssignmentDetail.scss";
import Comment from "../../components/Comment";
import { IoIosSend } from "react-icons/io";
import { AssignmentDetail as IAssignmentDetail } from "../../interfaces/reducerInterfaces";
import { getAssignmentDetailById, likeAssignment } from "../../actions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

// interface AssignmentDetail {
//   submitData: any,
//   task: Task;
//   student: Student;
//   comments: Comment[];
//   likes: string[],
//   completed: boolean,
// };

interface MatchInterface {
  id: string;
}

interface AssignmentDetailProps extends RouteComponentProps<MatchInterface> {
  assignment: IAssignmentDetail;
  getAssignmentDetailById: Function;
  likeAssignment: Function;
}

const AssignmentDetail: FunctionComponent<AssignmentDetailProps> = (props) => {
  const { assignment, getAssignmentDetailById, match, likeAssignment } = props;

  useEffect(() => {
    getAssignmentDetailById(match.params.id);
  }, []);

  const comments =
    assignment.comments &&
    assignment.comments.map((comment, idx) => (
      <Comment key={idx} comment={comment} />
    ));

  function likeHandler(e: any) {
    e.preventDefault();
    likeAssignment(match.params.id);
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
        <h1>{assignment.task.title}</h1>
        <h2 className="--lessPadding">{assignment.student.name}</h2>
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
              <input />
              <button onClick={(e) => e.preventDefault()}>
                <IoIosSend className="send-icon" />
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="assignment-detail-grand-wrapper__task-description">
        <h2>Description</h2>
        <p>{assignment.task.description}</p>
      </div>
    </div>
  );
};

function mapStateToProps({
  assignmentDetail,
}: {
  assignmentDetail: IAssignmentDetail;
}) {
  return { assignment: assignmentDetail };
}

export default connect(mapStateToProps, {
  getAssignmentDetailById,
  likeAssignment,
})(AssignmentDetail);
