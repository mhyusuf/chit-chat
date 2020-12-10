import { ChitChatAction, RoomPreview } from "../interfaces/reducerInterfaces";
import { GET_ROOMS_BY_COURSE } from "../actions/roomActions";

const initialState: RoomPreview[] = [];

const reducer = (
  state = initialState,
  action: ChitChatAction<RoomPreview[]>
) => {
  switch (action.type) {
    case GET_ROOMS_BY_COURSE:
      return action.payload;
    default:
      return state;
  }
};
export default reducer;
