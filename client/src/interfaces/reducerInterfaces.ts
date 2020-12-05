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
}

export interface AssignmentState {
  AssignmentDetail: any;
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

export interface Course {
  id: string;
  name: string;
  level: number;
  registrationId: string;
  targetLanguage: string;
}

export interface CourseState {
  courseList: Course[];
  activeCourse: string;
}

export interface Student {
  id: string;
  name: string;
  isTeacher: boolean;
  userId: string;
  avatar: string;
}
