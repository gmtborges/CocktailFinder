const ACTION_TYPES = {
  REQUEST_FETCHING: 'REQUEST_FETCHING',
  RESPONSE_SUCCESS: 'RESPONSE_SUCCESS',
  RESPONSE_ERROR: 'RESPONSE_ERROR',
};
interface IAction {
  (data?: any): {type: string; payload?: any};
}

export const fetchData: IAction = data => ({
  type: ACTION_TYPES.REQUEST_FETCHING,
  payload: data,
});

export const fetchSuccess: IAction = data => ({
  type: ACTION_TYPES.RESPONSE_SUCCESS,
  payload: data,
});

export const fetchError: IAction = data => ({
  type: ACTION_TYPES.RESPONSE_ERROR,
  payload: data,
});
