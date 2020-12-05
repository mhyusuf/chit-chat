import { ChitChatAction } from "../interfaces/reducerInterfaces";
import { GET_ALL_TASKS } from "../actions/tasksActions";

interface Task {
  id: number;
  title: string;
  description: string;
}

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
