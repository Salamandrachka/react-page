import {cartTypes} from "../types"

export function showOrders(data) {
    return {
        type: cartTypes.GET_ORDERS,
        payload: data,
    };
}

export function getOrders() {
    return function (dispatch) {
        const ordersLocal = localStorage.getItem('orders');
        if (ordersLocal) {
            const parsedOrders = JSON.parse(ordersLocal);
            dispatch(showOrders(parsedOrders));
        }
    }
}

export const addToCart = (item) => (dispatch) => {
    dispatch({
        type: cartTypes.ADD_TO_CART,
        payload: item,
    })
}
export const deleteFromCart = (id) => (dispatch) => {
    dispatch({
        type: cartTypes.DELETE_FROM_CART,
        payload: id,
    })
}

export const cartOpen = () => (dispatch) => {
    dispatch({ type: cartTypes.CART_OPEN})
}
export const cartClose = () => (dispatch) => {
    dispatch({ type: cartTypes.CART_ClOSE})
}