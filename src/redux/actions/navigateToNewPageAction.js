import { navigateToNewPageTypes } from "../types";

export const navigateToNewPage = () => (dispatch) => {
  dispatch({ type: navigateToNewPageTypes.NAVIGATE_TO_NEW_PAGE });
};