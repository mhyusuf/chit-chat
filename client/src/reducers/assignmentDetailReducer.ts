import {
  AssignmentDetail,
  ChitChatAction,
} from "../interfaces/reducerInterfaces";
import { GET_ASSIGNMENT } from "../actions/types";

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
    default:
      return state;
  }
};

export default reducer;
