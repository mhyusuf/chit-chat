import { Action } from "redux";

export interface ChitChatAction<T> extends Action {
  type: string;
  payload: T;
}

export interface User {
  isTeacher: boolean;
  userId: string;
  name: string;
  avatar: string;
}

export interface AssignmentPreview {
  AssignmentId: number;
  student: {
    name: string;
    avatar: string;
  };
  taskName: string;
  likes: number;
  comments: number;
}

export interface AssignmentState {
  AssignmentDetail: any;
  AssignmentPreviews: AssignmentPreview[];
}
