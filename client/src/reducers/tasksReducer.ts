import { ChitChatAction, Task } from "../interfaces/reducerInterfaces";
import { GET_ALL_TASKS } from "../actions/tasksActions";

const initialState: Task[] = [];

const reducer = (state = initialState, action: ChitChatAction<any>) => {
  switch (action.type) {
    case GET_ALL_TASKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
