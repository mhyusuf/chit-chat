import {
  ChitChatAction,
  User,
  AssignmentPreview,
} from "../interfaces/reducerInterfaces";
import { GET_STUDENT } from "../actions/studentActions";

interface RoomPreview {
  name: string;
  studentNames: string[];
  RoomId: string;
}

interface Student {
  student: User;
  assignments: AssignmentPreview[];
  room: RoomPreview;
}

const initialState: Student = {
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
    default:
      return state;
  }
};

export default reducer;
