import { Dispatch } from "react";
import axios from "axios";
import { History } from "history";

import { GET_CURRENT_USER, SET_ERROR } from "./types";

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
  try {
    const res = await axios.post("/api/student/login", {
      email,
      password,
    });
    dispatch({ type: GET_CURRENT_USER, payload: res.data });
    history.push("/home");
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: "Incorrect username or password." });
  }
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
  try {
    const { data } = await axios.post("/api/teacher/login", {
      email,
      password,
    });
    dispatch({ type: GET_CURRENT_USER, payload: data });
    history.push("/home");
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: "Incorrect username or password." });
  }
};

export const logout = (history: History<any>) => async (dispatch: any) => {
  await axios.get("/api/user/logout");
  dispatch({ type: GET_CURRENT_USER, payload: null });
  history.push("/");
};
