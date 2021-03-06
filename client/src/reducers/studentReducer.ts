import {
  ChitChatAction,
  User,
  AssignmentPreview,
} from "../interfaces/reducerInterfaces";
import { GET_STUDENT } from "../actions/studentActions";
import { EDIT_STUDENT_NAME } from "../actions/types";

interface RoomPreview {
  name: string;
  studentNames: string[];
  RoomId: string;
}

interface StudentState {
  student: User;
  assignments: AssignmentPreview[];
  room: RoomPreview;
}

const initialState: StudentState = {
  student: {
    id: "",
    isTeacher: false,
    userId: "",
    name: "",
    avatar: "",
  },
  assignments: [],
  room: {
    name: "",
    studentNames: [],
    RoomId: "",
  },
};

const reducer = (state = initialState, action: ChitChatAction<any>) => {
  switch (action.type) {
    case GET_STUDENT:
      return action.payload;
    case EDIT_STUDENT_NAME:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
