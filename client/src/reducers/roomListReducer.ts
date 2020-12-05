import { ChitChatAction } from "../interfaces/reducerInterfaces";
import { GET_ROOMS_BY_COURSE } from "../actions/roomActions";

interface RoomPreview {
  name: string;
  studentNames: string[];
  unseenMessages: boolean;
  RoomId: string;
}

interface RoomListState {
  roomsByCourse: RoomPreview[];
}

const initialState: RoomListState = {
  roomsByCourse: [],
};

const reducer = (state = initialState, action: ChitChatAction<any>) => {
  switch (action.type) {
    case GET_ROOMS_BY_COURSE:
      return { ...state, roomsByCourse: action.payload };
    default:
      return state;
  }
};
export default reducer;
