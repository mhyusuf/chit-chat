import axios from "axios";

const REACT_APP_SERVER_URI =
  process.env.REACT_APP_SERVER_URI || "http://localhost:5000";

export function createMessage(message: any) {
  return axios.post(`${REACT_APP_SERVER_URI}/api/message`, { ...message });
}
