import { Student, ChitChatAction } from "../interfaces/reducerInterfaces";
import { GET_TASK_DETAIL } from "../actions/tasksActions";

interface TaskDetailState {
  task: Task;
  students: Student[];
}

interface Task {
  id: number;
  title: string;
  description: string;
}

const initialState: TaskDetailState = {
  task: {
    id: 0,
    title: "",
    description: "",
  },
  students: [],
};

const reducer = (
  state = initialState,
  action: ChitChatAction<TaskDetailState>
) => {
  switch (action.type) {
    case GET_TASK_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
