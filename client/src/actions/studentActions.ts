import axios from "axios";

<<<<<<< HEAD
export const GET_STUDENT = "GET_STUDENT";

export const getStudent = (id: number) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/student/${id}`);
  dispatch({ type: GET_STUDENT, payload: data });
=======
import { GET_STUDENTS_BY_COURSE } from "./types";

export const getStudentsByCourse = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/student/course/${id}`);
  dispatch({ type: GET_STUDENTS_BY_COURSE, payload: data });
>>>>>>> 0c0b9116dcca7cd6a58df22a3d5b4134eefd4a39
};
