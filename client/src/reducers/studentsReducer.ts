import {
  GET_STUDENTS_BY_COURSE,
  GET_STUDENT_BY_ROOM,
  GET_STUDENTS_WITH_SISTER_COURSE,
} from "../actions/types";
import { ChitChatAction, Student } from "../interfaces/reducerInterfaces";

const initialState: Student[] = [];

const reducer = (state = initialState, action: ChitChatAction<Student[]>) => {
  switch (action.type) {
    case GET_STUDENTS_BY_COURSE:
      return action.payload;
    case GET_STUDENT_BY_ROOM:
      return action.payload;
    case GET_STUDENTS_WITH_SISTER_COURSE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
