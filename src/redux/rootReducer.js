// Core
import { combineReducers } from "redux";

// Reducers

import { itemsReducer as items } from "./reduces/itemsReducer";
import { favsReducer as favs } from "./reduces/favsReducer";
import { cartReducer as orders } from "./reduces/cartReducer";
import { modalsReducer as modal } from "./reduces/modalReducer";


export const rootReducer = combineReducers({ items, favs, orders, modal,});


// dispatch action creator -> middleware(redux-thunk) -> store -> reducer -> store -> useSelector

// getFilmsAsync() -> redux-thunk -> getFilmsAsync()() -> dispatch action fillFilms(data) action -> store -> filmsReducer -> store -> useSelector gets updated value

