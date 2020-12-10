import {
  AssignmentDetail,
  ChitChatAction,
} from "../interfaces/reducerInterfaces";
import {
  GET_ASSIGNMENT,
  LIKE_ASSIGNMENT,
  COMMENT_ASSIGNMENT,
  DELETE_COMMENT,
  CLEAR_ASSIGNMENT_UPLOAD,
} from "../actions/types";

const initialState: AssignmentDetail = {
  submitData: null,
  fileName: "",
  task: {
    id: 0,
    level: 0,
    title: "",
    description: "",
  },
  student: {
    id: "",
    name: "",
    isTeacher: false,
    userId: "",
    avatar: "",
    RoomId: 0,
    CourseId: 0,
  },
  comments: [],
  likes: [],
  completed: false,
};

const reducer = (state = initialState, action: ChitChatAction<any>) => {
  switch (action.type) {
    case GET_ASSIGNMENT:
      return action.payload;
    case LIKE_ASSIGNMENT:
      return { ...state, likes: action.payload };
    case COMMENT_ASSIGNMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    case CLEAR_ASSIGNMENT_UPLOAD:
      return {
        ...state,
        submitData: null,
        fileName: "",
      };
    default:
      return state;
  }
};

export default reducer;
