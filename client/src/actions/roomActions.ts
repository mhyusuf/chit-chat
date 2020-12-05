import axios from "axios";
import { GET_ALL_MESSAGES, GET_ROOM_USERS } from "./types";

export const getAllMessagesByRoom = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/message/${id}`);
  dispatch({ type: GET_ALL_MESSAGES, payload: data });
};

export const getRoomUsers = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/room/${id}/getUsers`);
  dispatch({ type: GET_ROOM_USERS, payload: data });
};
