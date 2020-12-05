import { GET_CURRENT_USER } from "../actions/types";
import { ChitChatAction, User } from "../interfaces/reducerInterfaces";

const initialState: User = {
  id: "",
  isTeacher: false,
  userId: "",
  name: "",
  avatar: "",
};

const reducer = (state = initialState, action: ChitChatAction<User>) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return action.payload || initialState;
    default:
      return state;
  }
};

export default reducer;
