import {
  AssignmentPreview,
  ChitChatAction,
} from "../interfaces/reducerInterfaces";
import {
  GET_ASSIGNMENT_PREVIEWS_BY_COURSE,
  GET_ASSIGNMENT_PREVIEWS_BY_ROOM,
  DISMISS_ASSIGNMENT,
} from "../actions/types";

const initialState: AssignmentPreview[] = [];

const reducer = (state = initialState, action: ChitChatAction<any>) => {
  switch (action.type) {
    case GET_ASSIGNMENT_PREVIEWS_BY_COURSE:
      return action.payload;
    case GET_ASSIGNMENT_PREVIEWS_BY_ROOM:
      return action.payload;
    case DISMISS_ASSIGNMENT:
      return state.filter((activity) => activity.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
