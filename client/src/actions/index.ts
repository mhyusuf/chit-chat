import axios from "axios";
import { Dispatch } from "react";
import {
  GET_CURRENT_USER,
  GET_ASSIGNMENT_PREVIEWS_BY_COURSE,
  GET_ALL_MESSAGES,
  GET_ROOM_USERS,
} from "./types";
import { History } from "history";

// const BASE_URL = "http://localhost:5000/";

export const getCurrentUser = () => async (dispatch: Dispatch<any>) => {
  const { data } = await axios.get("/api/user");
  dispatch({ type: GET_CURRENT_USER, payload: data });
};

export const loginStudent = (
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  },
  history: History<any>
) => async (dispatch: Dispatch<any>) => {
  const { data } = await axios.post("/api/student/login", {
    email,
    password,
  });
  dispatch({ type: GET_CURRENT_USER, payload: data });
  history.push("/home");
};

export const loginTeacher = (
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  },
  history: History<any>
) => async (dispatch: Dispatch<any>) => {
  const { data } = await axios.post("/api/teacher/login", {
    email,
    password,
  });
  dispatch({ type: GET_CURRENT_USER, payload: data });
  history.push("/home");
};

export const logout = (history: History<any>) => async (dispatch: any) => {
  await axios.get("/api/user/logout");
  dispatch({ type: GET_CURRENT_USER, payload: null });
  history.push("/login");
};

export const getAssignmentPreviewsByCourse = (id: number) => async (
  dispatch: any
) => {
  const { data } = await axios.get(`/api/assignment/course/${id}`);
  dispatch({ type: GET_ASSIGNMENT_PREVIEWS_BY_COURSE, payload: data });
};

export const getAllMessagesByRoom = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/message/${id}`);
  dispatch({ type: GET_ALL_MESSAGES, payload: data });
};

export const getRoomUsers = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/room/${id}/getUsers`);
  dispatch({ type: GET_ROOM_USERS, payload: data });
};
