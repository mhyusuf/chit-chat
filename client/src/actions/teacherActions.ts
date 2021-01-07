import axios from "axios";

import { EDIT_STUDENT_NAME } from "./types";

const REACT_APP_SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:5000";

export const editStudentName = (newName: string, studentId: string) => async (
  dispatch: any
) => {
  const { data } = await axios.put(
    `${REACT_APP_SERVER_URI}/api/teacher/student`,
    {
      newName,
      studentId,
    }
  );
  dispatch({ type: EDIT_STUDENT_NAME, payload: data });
};
