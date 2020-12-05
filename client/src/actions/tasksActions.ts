import axios from "axios";

export const GET_ALL_TASKS = "GET_ALL_TASKS";

export const getAllTasks = (level: number, language: string) => async (
  dispatch: any
) => {
  console.log("data");
  const { data } = await axios.get(`/api/task/${language}/${level}`);
  dispatch({ type: GET_ALL_TASKS, payload: data });
};
