import axios from "axios";
import { Dispatch } from "react";
import { GET_CURRENT_USER } from "./types";

export const GetCurrentUser = () => async (dispatch: Dispatch<any>) => {
  const { data } = await axios.get("/api/user/");
  dispatch({ type: GET_CURRENT_USER, payload: data });
};
