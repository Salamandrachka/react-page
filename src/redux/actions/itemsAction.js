import {itemsTypes} from "../types";

export function showItems(data) {
    return {
      type: itemsTypes.GET_ITEMS,
      payload: data,
    }
}

export function getItems() {
  return async function (dispatch) {
    try {
      const response = await fetch('/data/data.json');
      const data = await response.json();
      const items = data.products; // Обновлено: получаем массив товаров из свойства "products"
      dispatch(showItems(items));
    } catch (error) {
      console.log('Error fetching items:', error);
    }
  }
}