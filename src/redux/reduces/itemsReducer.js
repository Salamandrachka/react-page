import {itemsTypes} from "../types";

const initialState = {
  items: []
}

export function itemsReducer(state = initialState, action) {
    switch (action.type) {
      case itemsTypes.GET_ITEMS:
        // return action.payload; // Обновлено: возвращаем полученные товары
         return { ...state, items: action.payload}
        default:
            return state;
    }
}
