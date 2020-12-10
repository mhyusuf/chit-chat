import axios from "axios";
import { GET_ALL_MESSAGES, GET_ROOM_USERS, CLEAR_ROOM_DETAIL } from "./types";

export const GET_ROOMS_BY_COURSE = "GET_ROOMS_BY_COURSE";

export const getAllMessagesByRoom = (id: any) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/message/${id}`);
  dispatch({ type: GET_ALL_MESSAGES, payload: data });
};

export const getRoomUsers = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/room/${id}/getUsers`);
  dispatch({ type: GET_ROOM_USERS, payload: data });
};

export const getRoomsByCourse = (id: string) => async (dispatch: any) => {
  const { data } = await axios.get(`/api/room/course/${id}`);
  dispatch({ type: GET_ROOMS_BY_COURSE, payload: data });
};

export const clearRoomDetail = () => {
  return { type: CLEAR_ROOM_DETAIL };
};
