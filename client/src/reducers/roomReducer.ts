import {
  RoomDetailState,
  ChitChatAction,
} from "../interfaces/reducerInterfaces";
import { GET_ALL_MESSAGES, GET_ROOM_USERS } from "../actions/types";
const initialState: RoomDetailState = {
  teachers: [],
  students: [],
  messages: [],
};

const reducer = (state = initialState, action: ChitChatAction<any>) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return { ...state, messages: action.payload };
    case GET_ROOM_USERS:
      return {
        ...state,
        students: action.payload.students,
        teachers: action.payload.teachers,
      };
    default:
      return state;
  }
};

export default reducer;
