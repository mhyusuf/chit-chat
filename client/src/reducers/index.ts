import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import teacherReducer from "./teacherReducer";
import assignmentsReducer from "./assignmentsReducer";
import userReducer from "./userReducer";
import courseReducer from "./courseReducer";
import roomDetailReducer from "./roomDetailReducer";
import roomListReducer from "./roomListReducer";
import assignmentDetailReducer from "./assignmentDetailReducer";
import resourceReducer from "./resourceReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  user: userReducer,
  students: studentReducer,
  teachers: teacherReducer,
  assignments: assignmentsReducer,
  assignmentDetail: assignmentDetailReducer,
  tasks: tasksReducer,
  course: courseReducer,
  roomDetail: roomDetailReducer,
  roomList: roomListReducer,
  resources: resourceReducer,
});
