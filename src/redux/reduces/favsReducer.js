import {
  favsTypes,
} from "../types";

const initialState = {
  favs: [],
  isActive: false,
};

export function favsReducer(state = initialState, action) {
  switch (action.type) {
    case favsTypes.GET_FAVS:
      // return action.payload; // Обновлено: возвращаем полученные товары
      return { ...state, favs: action.payload };
    //
        case favsTypes.DELETE_FROM_FAVS: {
      return {
        ...state,
        favs: state.favs.filter((item) => item.id !== action.payload),
      }
    }
    //
    case favsTypes.ADD_TO_FAVS: {
      const item = action.payload;

      const isAlreadyExist = state.favs.some((i) => i.id === item.id);
      if (isAlreadyExist) return state;

      return {
        ...state,
        favs: [...state.favs, item]
      }
    }
    default:
      return state;
  }
}
