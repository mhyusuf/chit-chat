import axios from "axios";

import { EDIT_STUDENT_NAME } from "./types";

export const editStudentName = (newName: string, studentId: string) => async (
  dispatch: any
) => {
  const { data } = await axios.put("/api/teacher/student", {
    newName,
    studentId,
  });
  dispatch({ type: EDIT_STUDENT_NAME, payload: data });
};
