import axios from "axios";
import { User } from "../interfaces/reducerInterfaces";
import {
  GET_ASSIGNMENT_PREVIEWS_BY_COURSE,
  GET_ASSIGNMENT_PREVIEWS_BY_ROOM,
  GET_ASSIGNMENT,
  LIKE_ASSIGNMENT,
  COMMENT_ASSIGNMENT,
  DELETE_COMMENT,
  DISMISS_ASSIGNMENT,
  CLEAR_ASSIGNMENT_UPLOAD,
} from "./types";

const REACT_APP_SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:5000";

export const getAssignmentPreviewsByCourse = (id: string) => async (
  dispatch: any
) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_URI}/api/assignment/course/${id}`
  );
  dispatch({ type: GET_ASSIGNMENT_PREVIEWS_BY_COURSE, payload: data });
};

export const getAssignmentPreviewsByRoom = (id: string) => async (
  dispatch: any
) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_URI}/api/assignment/room/${id}`
  );
  dispatch({ type: GET_ASSIGNMENT_PREVIEWS_BY_ROOM, payload: data });
};
export const getAssignmentDetailById = (id: string) => async (
  dispatch: any
) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_URI}/api/assignment/${id}`
  );
  dispatch({ type: GET_ASSIGNMENT, payload: data });
};

export const likeAssignment = (id: string) => async (dispatch: any) => {
  const { data } = await axios.put(
    `${REACT_APP_SERVER_URI}/api/assignment/${id}?type=like`
  );
  dispatch({ type: LIKE_ASSIGNMENT, payload: data });
};

export const dismissAssignment = (id: string) => async (dispatch: any) => {
  const { data } = await axios.put(
    `${REACT_APP_SERVER_URI}/api/assignment/${id}?type=dismiss`
  );
  dispatch({ type: DISMISS_ASSIGNMENT, payload: data });
};

export const clearAssignmentUpload = (id: string) => async (dispatch: any) => {
  await axios.put(
    `${REACT_APP_SERVER_URI}/api/assignment/${id}?type=upload`,
    null
  );
  dispatch({ type: CLEAR_ASSIGNMENT_UPLOAD });
};

export const commentAssignment = (
  AssignmentId: string,
  user: User,
  content: string
) => async (dispatch: any) => {
  const { data } = await axios.post(`${REACT_APP_SERVER_URI}/api/comment`, {
    AssignmentId,
    user,
    content,
  });
  dispatch({ type: COMMENT_ASSIGNMENT, payload: data });
};

export const deleteComment = (id: string) => async (dispatch: any) => {
  await axios.delete(`${REACT_APP_SERVER_URI}/api/comment/${id}`);
  dispatch({ type: DELETE_COMMENT, payload: id });
};

export const submitAssignment = (id: string, file: File) => async (
  dispatch: any
) => {
  await axios.put(
    `${REACT_APP_SERVER_URI}/api/assignment/${id}?type=upload`,
    file
  );
  dispatch(getAssignmentDetailById(id));
};
