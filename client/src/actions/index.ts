import {
  getCurrentUser,
  loginStudent,
  loginTeacher,
  logout,
} from "./userActions";
import { getAllMessagesByRoom, getRoomUsers } from "./roomActions";
import {
  getAssignmentPreviewsByCourse,
  getAssignmentPreviewsByRoom,
  getAssignmentDetailById,
  likeAssignment,
  commentAssignment,
  deleteComment,
  submitAssignment,
  clearAssignmentUpload,
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
  getAssignmentPreviewsByRoom,
  getAssignmentDetailById,
  likeAssignment,
  commentAssignment,
  deleteComment,
  submitAssignment,
  clearAssignmentUpload,
  getCoursesByTeacher,
  setActiveCourse,
  getStudentsByCourse,
  getBothSetsStudentsByCourse,
  getStudent,
  getTaskDetail,
  getAllResources,
};
