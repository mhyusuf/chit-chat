import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import teacherReducer from "./teacherReducer";
import assignmentReducer from "./assignmentReducer";
import userReducer from "./userReducer";
import courseReducer from "./courseReducer";
import roomDetailReducer from "./roomDetailReducer";
import roomListReducer from "./roomListReducer";
import assignmentDetailReducer from "./assignmentDetailReducer";
import resourceReducer from "./resourceReducer";

export default combineReducers({
  user: userReducer,
  students: studentReducer,
  teachers: teacherReducer,
  assignments: assignmentReducer,
  assignmentDetail: assignmentDetailReducer,
  course: courseReducer,
  roomDetail: roomDetailReducer,
  roomList: roomListReducer,
  resources: resourceReducer,
});
