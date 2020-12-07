import React, { FunctionComponent, useEffect } from "react";
import "./AssignmentDetail.scss";
import Comment from "../../components/Comment";
import { IoIosSend } from "react-icons/io";
import { AssignmentDetail as IAssignmentDetail } from "../../interfaces/reducerInterfaces";
import { getAssignmentDetailById } from "../../actions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

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
}

const AssignmentDetail: FunctionComponent<AssignmentDetailProps> = (props) => {
  console.log(props);

  const { assignment, getAssignmentDetailById, match } = props;

  useEffect(() => {
    getAssignmentDetailById(match.params.id);
  });

  const comments =
    assignment.comments &&
    assignment.comments.map((comment, idx) => (
      <Comment key={idx} comment={comment} />
    ));

  const submitted = assignment.submitData ? true : false;

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
            <div className="preview-placeholder" />
            <button onClick={(e) => e.preventDefault()}>download</button>
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

export default connect(mapStateToProps, { getAssignmentDetailById })(
  AssignmentDetail
);
