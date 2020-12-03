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
