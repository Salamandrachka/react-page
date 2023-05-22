import { cartModalTypes, favsModalTypes, navigateToNewPageTypes } from "../types";

const initialState = {
  isOpenFavsModal: false,
  isOpenFavsDeleteModal: false,
  isOpenCartModal: false,
  isOpenCartDeleteModal: false,
  currentItem: null,
};

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case navigateToNewPageTypes.NAVIGATE_TO_NEW_PAGE:
      return {
        ...state,
        isOpenFavsModal: false,
        isOpenFavsDeleteModal: false,
        isOpenCartModal: false,
        isOpenCartDeleteModal: false,
      };
    //
    case favsModalTypes.OPEN_FAVS_MODAL:
      return {
        ...state,
        isOpenFavsModal: true,
        currentItem: action.payload
      };
    case favsModalTypes.CLOSE_FAVS_MODAL:
      return {
        ...state,
        isOpenFavsModal: false,
        currentItem: null

      };
    case favsModalTypes.OPEN_FAVS_DELETE_MODAL:
      return {
        ...state,
        isOpenFavsDeleteModal: true,
        currentItem: action.payload
      };
    case favsModalTypes.CLOSE_FAVS_DELETE_MODAL:
      return {
        ...state,
        isOpenFavsDeleteModal: false,
        currentItem: null

      };
    case cartModalTypes.OPEN_CART_MODAL:
      return {
        ...state,
        isOpenCartModal: true,
        currentItem: action.payload
      };
    case cartModalTypes.CLOSE_CART_MODAL:
      return {
        ...state,
        isOpenCartModal: false,
        currentItem: null

      };
    case cartModalTypes.OPEN_CART_DELETE_MODAL:
      return {
        ...state,
        isOpenCartDeleteModal: true,
        currentItem: action.payload
      };
    case cartModalTypes.CLOSE_CART_DELETE_MODAL:
      return {
        ...state,
        isOpenCartDeleteModal: false,
        currentItem: null

      };

    default:
      return state;
  }
};
