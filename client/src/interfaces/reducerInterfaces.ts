import { Action } from "redux";

export interface ChitChatAction<T> extends Action {
  type: string;
  payload: T;
}

export interface User {
  id: string;
  isTeacher: boolean;
  userId: string;
  name: string;
  avatar: string;
}

export interface StudentUser extends User {
  CourseId: number;
  RoomId: number;
}

export interface AssignmentPreview {
  id: number;
  student: {
    name: string;
    avatar: string;
  };
  taskName: string;
  description: string;
  likes: number;
  comments: number;
  fileData?: string;
  Task: any;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: number;
  senderId: string;
  senderName: string;
  content: string;
}

export interface AssignmentDetail {
  submitData: any;
  fileName: string;
  task: Task;
  student: Student;
  comments: Comment[];
  likes: string[];
  completed: boolean;
}

export interface AssignmentState {
  AssignmentDetail: AssignmentDetail;
  AssignmentPreviews: AssignmentPreview[];
}

export interface RoomParticipant {
  name: string;
  avatar: string;
}

export interface Message {
  sender: RoomParticipant;
  type: string;
  content: string;
  seenBy: string[];
  createdAt: string;
}

export interface RoomDetailState {
  teachers: RoomParticipant[];
  students: RoomParticipant[];
  messages: Message[];
  roomName: string;
}

export interface StudentState {
  student: User;
  RoomId: number;
  assignments: AssignmentPreview[];
  room: RoomPreview;
}

export interface RoomPreview {
  name: string;
  studentNames: string[];
  teamMembers: string[];
}

export interface Course {
  id: string;
  name: string;
  level: number;
  registrationId: string;
  targetLanguage: string;
}

export interface CourseState {
  courseList: Course[];
  activeCourseDetail: Course;
  activeCourse: number;
}

export interface Student {
  id: string;
  name: string;
  isTeacher: boolean;
  userId: string;
  avatar: string;
  RoomId: number;
  CourseId: number;
}

export interface Task {
  id: number;
  level: number;
  title: string;
  description: string;
}

export interface TaskDetailState {
  task: Task;
  students: Student[];
}

export interface Task {
  id: number;
  title: string;
  description: string;
}

export interface TaskDetailState {
  task: Task;
  students: Student[];
}

export interface Resource {
  id: number;
  title: string;
  description: string;
}
