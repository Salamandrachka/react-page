import {cartTypes} from "../types"

const initialState = {
    orders: [],
    isOpenCart: false
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case cartTypes.CART_OPEN:
            return {
                ...state,
                isOpenCart: true
            };
        case cartTypes.GET_ORDERS:
            return { ...state, orders: action.payload }
        //
            case cartTypes.ADD_TO_CART: {
const item = action.payload;

      const isAlreadyExist = state.orders.some((i) => i.id === item.id);
      if (isAlreadyExist) return state;

      return {
        ...state,
        orders: [...state.orders, item]
      }
    }
    //
        case cartTypes.DELETE_FROM_CART: {
            return {
        ...state,
        orders: state.orders.filter((item) => item.id !== action.payload),
      }
      
    }
        default:
            return state;
    }
}