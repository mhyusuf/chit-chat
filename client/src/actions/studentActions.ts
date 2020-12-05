import axios from "axios";

import { GET_STUDENTS_BY_COURSE } from "./types";

export const getStudentsByCourse = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/student/course/${id}`);
  dispatch({ type: GET_STUDENTS_BY_COURSE, payload: data });
};
