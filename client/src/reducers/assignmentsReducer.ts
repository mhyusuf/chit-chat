import {
  AssignmentPreview,
  ChitChatAction,
} from "../interfaces/reducerInterfaces";
import {
  GET_ASSIGNMENT_PREVIEWS_BY_COURSE,
  GET_ASSIGNMENT_PREVIEWS_BY_ROOM,
} from "../actions/types";

const initialState: AssignmentPreview[] = [];

const reducer = (
  state = initialState,
  action: ChitChatAction<AssignmentPreview[]>
) => {
  switch (action.type) {
    case GET_ASSIGNMENT_PREVIEWS_BY_COURSE:
      return action.payload;
    case GET_ASSIGNMENT_PREVIEWS_BY_ROOM:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
