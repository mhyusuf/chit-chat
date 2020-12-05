import axios from "axios";
import { Course } from "../interfaces/reducerInterfaces";

export const GET_COURSES_BY_TEACHER = "GET_COURSES_BY_TEACHER";
export const SET_ACTIVE_COURSE = "SET_ACTIVE_COURSE";

export const getCoursesByTeacher = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/course/teacher/${id}`);
  dispatch({ type: GET_COURSES_BY_TEACHER, payload: data });
};

export const setActiveCourse = (course: Course) => {
  return { type: SET_ACTIVE_COURSE, payload: course };
};
