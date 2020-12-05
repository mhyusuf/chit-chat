<<<<<<< HEAD
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
=======
import { GET_STUDENTS_BY_COURSE } from "../actions/types";
import { ChitChatAction, Student } from "../interfaces/reducerInterfaces";

const initialState: Student[] = [];

const reducer = (state = initialState, action: ChitChatAction<Student[]>) => {
  switch (action.type) {
    case GET_STUDENTS_BY_COURSE:
>>>>>>> 0c0b9116dcca7cd6a58df22a3d5b4134eefd4a39
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
