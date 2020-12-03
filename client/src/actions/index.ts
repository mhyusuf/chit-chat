import axios from "axios";
import { Dispatch } from "react";
import { GET_CURRENT_USER } from "./types";
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
