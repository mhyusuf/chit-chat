import axios from "axios";

import { GET_ALL_RESOURCES } from "./types";

export const getAllResources = (
  targetLanguage: string,
  level: number
) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/resource/${targetLanguage}/${level}`);
  dispatch({ type: GET_ALL_RESOURCES, payload: data });
};
