import { GET_STUDENTS_BY_COURSE } from "../actions/types";
import { ChitChatAction, Student } from "../interfaces/reducerInterfaces";

const initialState: Student[] = [];

const reducer = (state = initialState, action: ChitChatAction<Student[]>) => {
  switch (action.type) {
    case GET_STUDENTS_BY_COURSE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
