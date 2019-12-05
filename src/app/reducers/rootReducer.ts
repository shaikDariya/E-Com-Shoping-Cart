import { History } from "history";
import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import ItemListReducer from "../home/mainContent/ItemsList/ItemsListReducer";
import CategoriesReducer from "../home/header/categories/CategoriesReducer";

export const reducers = (history: History) => ({
    router: connectRouter(history),
    items: ItemListReducer,
    categorie: CategoriesReducer
})

const rootReducer = (history: History) => combineReducers(reducers(history));

export default rootReducer;