import { ChitChatAction, CourseState } from "../interfaces/reducerInterfaces";
import {
  GET_COURSES_BY_TEACHER,
  SET_ACTIVE_COURSE,
  SET_ACTIVE_COURSE_DETAIL,
} from "../actions/courseActions";

const initialState: CourseState = {
  activeCourse: 0,
  activeCourseDetail: {
    id: "",
    name: "",
    level: 0,
    registrationId: "",
    targetLanguage: "EN",
  },
  courseList: [],
};

const reducer = (state = initialState, action: ChitChatAction<any>) => {
  switch (action.type) {
    case GET_COURSES_BY_TEACHER:
      return { ...state, courseList: action.payload };
    case SET_ACTIVE_COURSE:
      return { ...state, activeCourse: +action.payload };
    case SET_ACTIVE_COURSE_DETAIL:
      return { ...state, activeCourseDetail: action.payload };
    default:
      return state;
  }
};

export default reducer;
