import axios from "axios";
import { GET_ASSIGNMENT_PREVIEWS_BY_COURSE, GET_ASSIGNMENT } from "./types";

export const getAssignmentPreviewsByCourse = (id: string) => async (
  dispatch: any
) => {
  const { data } = await axios.get(`/api/assignment/course/${id}`);
  dispatch({ type: GET_ASSIGNMENT_PREVIEWS_BY_COURSE, payload: data });
};

export const getAssignmentDetailById = (id: string) => async (
  dispatch: any
) => {
  const { data } = await axios.get(`/api/assignment/${id}`);
  dispatch({ type: GET_ASSIGNMENT, payload: data });
};
