import axios from "axios";

export function createMessage(message: any) {
  return axios.post("/api/message", { ...message });
}
