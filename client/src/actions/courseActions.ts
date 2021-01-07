import axios from "axios";

export const GET_COURSES_BY_TEACHER = "GET_COURSES_BY_TEACHER";
export const SET_ACTIVE_COURSE = "SET_ACTIVE_COURSE";
export const SET_ACTIVE_COURSE_DETAIL = "SET_ACTIVE_COURSE_DETAIL";

const REACT_APP_SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:5000";

export const getCoursesByTeacher = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_URI}/api/course/teacher/${id}`
  );
  dispatch({ type: GET_COURSES_BY_TEACHER, payload: data });
};

export const setActiveCourse = (courseId: string) => {
  return { type: SET_ACTIVE_COURSE, payload: courseId };
};

export const setActiveCourseDetail = (courseId: number) => async (
  dispatch: any
) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_URI}/api/course/${courseId}`
  );
  dispatch({ type: SET_ACTIVE_COURSE_DETAIL, payload: data });
};
