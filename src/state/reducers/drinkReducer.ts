import {
  REQUEST_FETCHING,
  RESPONSE_SUCCESS,
  RESPONSE_ERROR,
  CHANGE_INPUT,
} from '../actions/drinkActions';

interface IState {
  drinks: [];
  searchInput: string;
  loading: boolean;
  error: any;
}
const initialState: IState = {
  drinks: [],
  searchInput: '',
  loading: false,
  error: null,
};

export default function drinkReducer(
  state: IState = initialState,
  action: {type: string; payload?: any},
) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case REQUEST_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case RESPONSE_SUCCESS:
      return {
        ...state,
        loading: false,
        drinks: action.payload,
      };
    case RESPONSE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        drinks: [],
      };
    default:
      return state;
  }
}
