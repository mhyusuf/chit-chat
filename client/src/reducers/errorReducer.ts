import { ChitChatAction } from "../interfaces/reducerInterfaces";
import { SET_ERROR } from "../actions/types";

const reducer = (state = "", action: ChitChatAction<string>) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
