import { Dispatch } from "react";
import axios from "axios";
import { History } from "history";

import { GET_CURRENT_USER, SET_ERROR } from "./types";

const REACT_APP_SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:5000";

export const getCurrentUser = () => async (dispatch: Dispatch<any>) => {
  const { data } = await axios.get(`${REACT_APP_SERVER_URI}/api/user`, { withCredentials: true });
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
    const res = await axios.post(`${REACT_APP_SERVER_URI}/api/student/login`, {
      email,
      password,
    }, { withCredentials: true });
    dispatch({ type: GET_CURRENT_USER, payload: res.data });
    history.push("/home");
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: "" });
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
    const { data } = await axios.post(
      `${REACT_APP_SERVER_URI}/api/teacher/login`,
      {
        email,
        password,
      }, { withCredentials: true }
    );
    dispatch({ type: GET_CURRENT_USER, payload: data });
    dispatch({ type: SET_ERROR, payload: "" });
    history.push("/home");
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: "Incorrect username or password." });
  }
};

export const logout = (history: History<any>) => async (dispatch: any) => {
  await axios.get(`${REACT_APP_SERVER_URI}/api/user/logout`, { withCredentials: true });
  dispatch({ type: GET_CURRENT_USER, payload: null });
  history.push("/");
};
