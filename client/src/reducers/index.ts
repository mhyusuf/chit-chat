import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import teacherReducer from "./teacherReducer";
import assignmentReducer from "./assignmentReducer";
import userReducer from "./userReducer";
import courseReducer from "./courseReducer";
import roomReducer from "./roomReducer";
import resourceReducer from "./resourceReducer";

export default combineReducers({
  user: userReducer,
  students: studentReducer,
  teachers: teacherReducer,
  assignments: assignmentReducer,
  courses: courseReducer,
  rooms: roomReducer,
  resources: resourceReducer,
});
