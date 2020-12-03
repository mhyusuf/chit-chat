import axios from "axios";
import { Dispatch } from "react";
import { GET_CURRENT_USER } from "./types";

const BASE_URL = "http://localhost:5000/";

export const getCurrentUser = () => async (dispatch: Dispatch<any>) => {
  const { data } = await axios.get(BASE_URL + "api/user");
  dispatch({ type: GET_CURRENT_USER, payload: data });
};

export const loginStudent = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => async (dispatch: Dispatch<any>) => {
  const { data } = await axios.post(BASE_URL + "api/student/login", {
    email,
    password,
  });
  dispatch({ type: GET_CURRENT_USER, payload: data });
};

export const loginTeacher = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => async (dispatch: Dispatch<any>) => {
  const { data } = await axios.post(BASE_URL + "api/teacher/login", {
    email,
    password,
  });
  dispatch({ type: GET_CURRENT_USER, payload: data });
};
