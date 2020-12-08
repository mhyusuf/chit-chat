import { ChitChatAction } from "../interfaces/reducerInterfaces";
import { GET_ALL_RESOURCES } from "../actions/types";
import { Resource } from "../interfaces/reducerInterfaces";

interface ResourceListState {
  resources: Resource[];
}

const initialState: ResourceListState = {
  resources: [],
};

const reducer = (state = initialState, action: ChitChatAction<any>) => {
  switch (action.type) {
    case GET_ALL_RESOURCES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
