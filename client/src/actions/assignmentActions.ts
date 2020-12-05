import axios from "axios";
import { GET_ASSIGNMENT_PREVIEWS_BY_COURSE } from "./types";

export const getAssignmentPreviewsByCourse = (id: string) => async (
  dispatch: any
) => {
  const { data } = await axios.get(`/api/assignment/course/${id}`);
  dispatch({ type: GET_ASSIGNMENT_PREVIEWS_BY_COURSE, payload: data });
};
