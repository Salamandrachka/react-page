import { favsTypes } from "../types";

export function showFavs(data) {
  return {
    type: favsTypes.GET_FAVS,
    payload: data,
  };
}

export function getFavs() {
  return function (dispatch) {
    const favouriteLocal = localStorage.getItem('favs');
    if (favouriteLocal) {
      const parsedFavourite = JSON.parse(favouriteLocal);
      dispatch(showFavs(parsedFavourite)); // Используем экшн showFavs для вывода данных на страницу
    }
  };
}

export const addToFavs = (item) => (dispatch) => {
    dispatch({
        type: favsTypes.ADD_TO_FAVS,
        payload: item,
    })
}
export const deleteFromFavs = (id) => (dispatch) => {
    dispatch({
        type: favsTypes.DELETE_FROM_FAVS,
        payload: id,
    })
}

export const favsOpen = () => (dispatch) => {
    dispatch({ type: favsTypes.CART_OPEN})
}
export const favsClose = () => (dispatch) => {
    dispatch({ type: favsTypes.CART_ClOSE})
}