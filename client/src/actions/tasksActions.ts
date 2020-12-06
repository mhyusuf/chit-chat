import axios from "axios";

export const GET_ALL_TASKS = "GET_ALL_TASKS";
export const GET_TASK_DETAIL = "GET_TASK_DETAIL";

export const getAllTasks = (level: number, language: string) => async (
  dispatch: any
) => {
  const { data } = await axios.get(`/api/task/${language}/${level}`);
  dispatch({ type: GET_ALL_TASKS, payload: data });
};

export const getTaskDetail = (TaskId: string, CourseId: string) => async (
  dispatch: any
) => {
  const { data } = await axios.get(`/api/task/${TaskId}/course/${CourseId}`);
  dispatch({ type: GET_TASK_DETAIL, payload: data });
};
