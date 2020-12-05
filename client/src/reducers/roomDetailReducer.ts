import {
  RoomDetailState,
  ChitChatAction,
} from "../interfaces/reducerInterfaces";
import { GET_ALL_MESSAGES, GET_ROOM_USERS } from "../actions/types";
const initialState: RoomDetailState = {
  teachers: [],
  students: [],
  messages: [],
  roomName: "",
};

const reducer = (state = initialState, action: ChitChatAction<any>) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      // console.log(action.payload);
      return { ...state, messages: action.payload };
    case GET_ROOM_USERS:
      return {
        ...state,
        students: action.payload.students,
        teachers: action.payload.teachers,
        roomName: action.payload.roomName,
      };
    default:
      return state;
  }
};

export default reducer;
