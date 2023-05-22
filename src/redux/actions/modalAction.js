import { cartModalTypes, favsModalTypes } from "../types";

export const openFavsModal = (item) => (dispatch) => {
  dispatch({ type: favsModalTypes.OPEN_FAVS_MODAL, payload: item });
};
export const openFavsDeleteModal = (item) => (dispatch) => {
  dispatch({ type: favsModalTypes.OPEN_FAVS_DELETE_MODAL, payload: item });
};
export const openCartModal = (item) => (dispatch) => {
  dispatch({ type: cartModalTypes.OPEN_CART_MODAL, payload: item });
};
export const openCartDeleteModal = (item) => (dispatch) => {
  dispatch({ type: cartModalTypes.OPEN_CART_DELETE_MODAL, payload: item });
};

export const closeFavsModal = () => (dispatch) => {
  dispatch({ type: favsModalTypes.CLOSE_FAVS_MODAL});
};
export const closeFavsDeleteModal = () => (dispatch) => {
  dispatch({ type: favsModalTypes.CLOSE_FAVS_DELETE_MODAL });
};
export const closeCartModal = () => (dispatch) => {
  dispatch({ type: cartModalTypes.CLOSE_CART_MODAL});
};
export const closeCartDeleteModal = () => (dispatch) => {
  dispatch({ type: cartModalTypes.CLOSE_CART_DELETE_MODAL});
};
