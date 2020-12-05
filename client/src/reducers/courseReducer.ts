import { ChitChatAction, CourseState } from "../interfaces/reducerInterfaces";
import {
  GET_COURSES_BY_TEACHER,
  SET_ACTIVE_COURSE,
} from "../actions/courseActions";

const initialState: CourseState = {
  activeCourse: {},
  courseList: [],
};

const reducer = (state = initialState, action: ChitChatAction<any>) => {
  switch (action.type) {
    case GET_COURSES_BY_TEACHER:
      return { ...state, courseList: action.payload };
    case SET_ACTIVE_COURSE:
      return { ...state, activeCourse: action.payload };
    default:
      return state;
  }
};

export default reducer;
