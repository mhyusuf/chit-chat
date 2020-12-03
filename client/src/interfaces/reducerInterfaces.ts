import { Action } from "redux";

export interface ChitChatAction<T> extends Action {
  type: string;
  payload: T;
}

export interface User {
  isTeacher: boolean;
  uuid: string;
  name: string;
  avatar: string;
}
