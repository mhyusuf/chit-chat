import axios from "axios";

export const GET_STUDENT = "GET_STUDENT";

export const getStudent = (id: number) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/student/${id}`);
  dispatch({ type: GET_STUDENT, payload: data });
};
