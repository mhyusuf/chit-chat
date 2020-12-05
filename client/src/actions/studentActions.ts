import axios from "axios";
import { GET_STUDENTS_BY_COURSE } from "./types";
import { getRoomUsers } from "./roomActions";

export const GET_STUDENT = "GET_STUDENT";

export const getStudent = (id: number) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/student/${id}`);
  console.log("DATA", data);
  dispatch(getRoomUsers(data.RoomId));
  dispatch({ type: GET_STUDENT, payload: data });
};

export const getStudentsByCourse = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/student/course/${id}`);
  dispatch({ type: GET_STUDENTS_BY_COURSE, payload: data });
};
