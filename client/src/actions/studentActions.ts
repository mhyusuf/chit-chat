import axios from "axios";
import {
  GET_STUDENTS_BY_COURSE,
  GET_STUDENT_BY_ROOM,
  GET_STUDENTS_WITH_SISTER_COURSE,
  REGISTER_STUDENT,
} from "./types";
import { getRoomUsers } from "./roomActions";

export const GET_STUDENT = "GET_STUDENT";

const REACT_APP_SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:5000";

export const getStudent = (id: number) => async (dispatch: any) => {
  const { data } = await axios.get(`${REACT_APP_SERVER_URI}/api/student/${id}`);
  dispatch(getRoomUsers(data.RoomId));
  dispatch({ type: GET_STUDENT, payload: data });
};

export const getStudentsByCourse = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_URI}/api/student/course/${id}`
  );
  dispatch({ type: GET_STUDENTS_BY_COURSE, payload: data });
};

export const getStudentsByRoom = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_URI}/api/student/course/${id}`
  );
  dispatch({ type: GET_STUDENT_BY_ROOM, payload: data });
};

export const getBothSetsStudentsByCourse = (id: number) => async (
  dispatch: any
) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_URI}/api/student/sisterCourse/${id}`
  );
  dispatch({ type: GET_STUDENTS_WITH_SISTER_COURSE, payload: data });
};

export const registerStudent = (
  email: string,
  name: string,
  password: string,
  avatar: string,
  roomRegistrationId: string,
  courseRegistrationId: string
) => async (dispatch: any) => {
  const { data } = await axios.post(`${REACT_APP_SERVER_URI}/admin/student/`, {
    email,
    name,
    password,
    avatar,
    roomRegistrationId,
    courseRegistrationId,
  });
  dispatch({ type: REGISTER_STUDENT, payload: data });
};
