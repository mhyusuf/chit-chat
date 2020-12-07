import {
  AssignmentDetail,
  ChitChatAction,
} from "../interfaces/reducerInterfaces";
import { GET_ASSIGNMENT, LIKE_ASSIGNMENT } from "../actions/types";

const initialState: AssignmentDetail = {
  submitData: null,
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

const reducer = (
  state = initialState,
  action: ChitChatAction<AssignmentDetail>
) => {
  switch (action.type) {
    case GET_ASSIGNMENT:
      return action.payload;
    case LIKE_ASSIGNMENT:
      return { ...state, likes: action.payload };
    default:
      return state;
  }
};

export default reducer;
