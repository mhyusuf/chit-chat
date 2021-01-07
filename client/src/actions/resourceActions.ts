import axios from "axios";

import { GET_ALL_RESOURCES } from "./types";

const REACT_APP_SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:5000";

export const getAllResources = (
  targetLanguage: string,
  level: number
) => async (dispatch: any) => {
  const { data } = await axios.get(
    `${REACT_APP_SERVER_URI}/api/resource/${targetLanguage}/${level}`
  );
  dispatch({ type: GET_ALL_RESOURCES, payload: data });
};
