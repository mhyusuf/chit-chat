import {
  getCurrentUser,
  loginStudent,
  loginTeacher,
  logout,
} from "./userActions";
import { getAllMessagesByRoom, getRoomUsers } from "./roomActions";
import {
  getAssignmentPreviewsByCourse,
  getAssignmentDetailById,
  likeAssignment,
  commentAssignment,
  deleteComment,
  submitAssignment,
} from "./assignmentActions";
import { getCoursesByTeacher, setActiveCourse } from "./courseActions";
import {
  getStudentsByCourse,
  getStudent,
  getBothSetsStudentsByCourse,
} from "./studentActions";
import { getTaskDetail } from "./tasksActions";
import { getAllResources } from "./resourceActions";

export {
  getCurrentUser,
  loginStudent,
  loginTeacher,
  logout,
  getAllMessagesByRoom,
  getRoomUsers,
  getAssignmentPreviewsByCourse,
  getAssignmentDetailById,
  likeAssignment,
  commentAssignment,
  deleteComment,
  submitAssignment,
  getCoursesByTeacher,
  setActiveCourse,
  getStudentsByCourse,
  getBothSetsStudentsByCourse,
  getStudent,
  getTaskDetail,
  getAllResources,
};
