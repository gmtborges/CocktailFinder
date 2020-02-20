export const CHANGE_INPUT: string = 'CHANGE_INPUT';
export const REQUEST_FETCHING: string = 'REQUEST_FETCHING';
export const RESPONSE_SUCCESS: string = 'RESPONSE_SUCCESS';
export const RESPONSE_ERROR: string = 'RESPONSE_ERROR';

import api from '../../services/api';
interface IAction {
  (data?: any): any;
}

export const changeInput: IAction = searchInput => {
  return {
    type: CHANGE_INPUT,
    payload: searchInput,
  };
};

export const fetchData: IAction = () => {
  return {
    type: REQUEST_FETCHING,
  };
};

export const fetchSuccess: IAction = drinks => {
  return {
    type: RESPONSE_SUCCESS,
    payload: drinks,
  };
};

export const fetchError: IAction = error => {
  return {
    type: RESPONSE_ERROR,
    payload: error,
  };
};

export const fetchDrinks: IAction = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(fetchData());
    const {searchInput} = getState();
    try {
      const response = await api.get(`search.php?s=${searchInput}`);
      const drinks = response.data.drinks.map((item: any) => {
        return {
          id: item.idDrink,
          name: item.strDrink,
          thumb: item.strDrinkThumb,
        };
      });
      dispatch(fetchSuccess(drinks));
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};
